import express, { type Request, type Response } from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { signatures } from './data/signatures.ts';
import { viewerHTML } from './public/viewer.ts';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = '1.0.0';
const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://signature.starside.io' 
  : `http://localhost:${PORT}`;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (for logo)
app.use(express.static(path.join(__dirname, 'assets')));

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
    version: VERSION,
    endpoints: {
      viewer: `GET ${BASE_URL}/signature/view - Interactive HTML viewer with copy button`,
      random: `GET ${BASE_URL}/signature - Random signature from any category`,
      category: `GET ${BASE_URL}/signature/:category - Get signature from specific category (unbothered, unhinged, unleashed)`,
      health: `GET ${BASE_URL}/health - API health check`,
      about: `GET ${BASE_URL}/about - API information`
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
  
  // Ignore requests for static files (e.g., images)
  if (category.includes('.')) {
    return res.status(404).json({ error: 'Not found' });
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
    name: 'signature-as-a-service',
    version: VERSION,
    description: 'An API that serves unhinged email signatures across three tiers: Unbothered, Unhinged, and Unleashed',
    author: 'Burlet Mederic <mederic.burlet@gmail.com>',
    repository: 'https://github.com/starside-io/signature-as-a-service',
    totalSignatures: signatures.length,
    categories: ['unbothered', 'unhinged', 'unleashed'],
    status: 'alive and unhinged'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✨ Signature-as-a-Service running on ${BASE_URL}`);
  console.log(`📊 Loaded ${signatures.length} signatures`);
  console.log(`🎯 API ready at ${BASE_URL}/signature`);
});
