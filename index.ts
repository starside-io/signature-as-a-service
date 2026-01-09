import express, { type Request, type Response } from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import signaturesData from './data/signatures.json' with { type: 'json' };
import pkg from './package.json' with { type: 'json' };
import { viewerHTML } from './public/viewer.ts';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  message: { error: 'Too many requests, please try again later.' }
});

app.use(limiter);

// Types
interface Signature {
  text: string;
  tier: 'unbothered' | 'unhinged' | 'unleashed';
}

// Type-assert the imported JSON
const signatures = signaturesData as Signature[];

// Helper function to get random signature by tier
function getRandomSignature(tier?: string): Signature {
  let pool: Signature[];
  
  if (tier && ['unbothered', 'unhinged', 'unleashed'].includes(tier.toLowerCase())) {
    pool = signatures.filter((sig: Signature) => sig.tier === tier.toLowerCase());
  } else {
    pool = signatures;
  }
  
  if (pool.length === 0) {
    pool = signatures; // Fallback to all signatures
  }
  
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

// Routes

// Root endpoint
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: '✨ Signature-as-a-Service',
    description: 'Get unhinged email signatures for every occasion',
    version: pkg.version,
    endpoints: {
      viewer: 'GET /signature/view - Interactive HTML viewer with copy button',
      random: 'GET /signature - Random signature from any category',
      category: 'GET /signature/:category - Get signature from specific category (unbothered, unhinged, unleashed)',
      health: 'GET /health - API health check',
      about: 'GET /about - API information'
    },
    categories: {
      unbothered: 'Tier 1: Slightly quirky, mostly professional',
      unhinged: 'Tier 2: Definitely not HR-approved',
      unleashed: 'Tier 3: Complete chaos energy'
    }
  });
});

// Get random signature (any tier)
app.get('/signature', (_req: Request, res: Response) => {
  const signature = getRandomSignature();
  res.json({
    signature: signature.text,
    tier: signature.tier
  });
});

// Get signature by category
app.get('/signature/:category', (req: Request, res: Response) => {
  const { category } = req.params;
  const validCategories = ['unbothered', 'unhinged', 'unleashed'];
  
  // Check if it's the view route
  if (category === 'view') {
    return res.send(viewerHTML);
  }
  
  if (!validCategories.includes(category.toLowerCase())) {
    return res.status(400).json({
      error: 'Invalid category. Choose from: unbothered, unhinged, unleashed',
      validCategories
    });
  }
  
  const signature = getRandomSignature(category);
  res.json({
    signature: signature.text,
    tier: signature.tier
  });
});

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ 
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// About endpoint
app.get('/about', (_req: Request, res: Response) => {
  res.json({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    author: pkg.author,
    repository: 'https://github.com/starside-io/signature-as-a-service',
    totalSignatures: signatures.length,
    categories: ['unbothered', 'unhinged', 'unleashed'],
    status: 'alive and unhinged'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✨ Signature-as-a-Service running on http://localhost:${PORT}`);
  console.log(`📊 Loaded ${signatures.length} signatures`);
  console.log(`🎯 API ready at http://localhost:${PORT}/signature`);
});
