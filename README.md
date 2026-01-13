<div align="center">
  <img src="./assets/saas.png" alt="Signature-as-a-Service Logo" width="200" />
</div>

# ✨ Signature-as-a-Service

Ever needed an email signature that truly reflects your mood? This API serves unhinged email signatures across three carefully crafted tiers of chaos.

Built with modern TypeScript and powered by existential dread.

![signature-as-a-service](https://img.shields.io/badge/status-active-brightgreen) ![License](https://img.shields.io/badge/license-Apache%202.0-blue) ![Typescript](https://img.shields.io/badge/language-Typescript-blue)

## 🎯 Signature Tiers

- **Tier 1: Unbothered** - Slightly quirky, mostly professional. For when you're mildly inconvenienced.
- **Tier 2: Unhinged** - Definitely not HR-approved. For when the mask starts slipping.
- **Tier 3: Unleashed** - Complete chaos energy. For when you've given up entirely.

## 🚀 API Usage

### Base URL
```
Production: https://signature.starside.io
Local: http://localhost:3000
```

### Endpoints

#### Root - API Information
```bash
GET /
```

Returns API documentation, available endpoints, and signature categories.

**Example Response:**
```json
{
  "message": "✨ Signature-as-a-Service",
  "description": "Get unhinged email signatures for every occasion",
  "version": "1.0.0",
  "endpoints": {
    "viewer": "GET /signature/view - Interactive HTML viewer with copy button",
    "random": "GET /signature - Random signature from any category",
    "category": "GET /signature/:category - Get signature from specific category",
    "health": "GET /health - API health check",
    "about": "GET /about - API information"
  },
  "categories": {
    "unbothered": "Tier 1: Slightly quirky, mostly professional",
    "unhinged": "Tier 2: Definitely not HR-approved",
    "unleashed": "Tier 3: Complete chaos energy"
  }
}
```

#### Get Random Signature (Any Category)
```bash
GET /signature
```

**Example Response:**
```json
{
  "signature": "With chaotic neutrality,",
  "tier": "unbothered"
}
```

#### Get Signature by Category
```bash
GET /signature/unbothered
GET /signature/unhinged
GET /signature/unleashed
```

**Example Response:**
```json
{
  "signature": "Powered by spite,",
  "tier": "unleashed"
}
```

#### Interactive Signature Viewer
```bash
GET /signature/view
```

Opens an interactive HTML page with a signature generator and copy-to-clipboard functionality.

#### Health Check
```bash
GET /health
```

**Example Response:**
```json
{
  "status": "ok",
  "uptime": 12345.67,
  "timestamp": "2026-01-12T10:30:00.000Z"
}
```

#### About API
```bash
GET /about
```

**Example Response:**
```json
{
  "name": "signature-as-a-service",
  "version": "1.0.0",
  "description": "An API that serves unhinged email signatures across three tiers",
  "author": "Burlet Mederic <mederic.burlet@gmail.com>",
  "repository": "https://github.com/starside-io/signature-as-a-service",
  "totalSignatures": 95,
  "categories": ["unbothered", "unhinged", "unleashed"],
  "status": "alive and unhinged"
}
```

### Rate Limit
`120 requests per minute per IP`

## 🛠️ Technology

This project uses **modern TypeScript** with Node.js 22.18+ features:
- ✅ No compilation step - Node runs TypeScript directly
- ✅ `--experimental-strip-types` for native TS support
- ✅ ESM modules with `.ts` extensions
- ✅ Type-safe imports with `with { type: 'json' }`

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "nodenext",
    "noEmit": true,
    "erasableSyntaxOnly": true,
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true
  }
}
```

## 📦 Installation

### Prerequisites
- Node.js 22.18.0 or higher

### Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/signature-as-a-service.git
   cd signature-as-a-service
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

The API will be live at `http://localhost:3000`

### Custom Port
```bash
PORT=5000 npm start
```

## 📁 Project Structure

```
signature-as-a-service/
├── index.ts              # Express API server
├── package.json
├── tsconfig.json         # Modern TypeScript config
├── vercel.json           # Vercel deployment config
├── data/
│   └── signatures.ts     # Signature database with types
├── public/
│   └── viewer.ts         # Interactive HTML viewer
└── README.md
```

## 🎨 Adding Your Own Signatures

Edit `data/signatures.ts` to add more signatures:

```typescript
export const signatures: Signature[] = [
  { "text": "Your new signature,", "tier": "unbothered" },
  { "text": "Another signature,", "tier": "unhinged" },
  { "text": "Complete chaos,", "tier": "unleashed" }
];
```

Choose from tiers: from any category
curl https://signature.starside.io/signature

# Specific category
curl https://signature.starside.io/signature/unhinged

# API information
curl https://signature.starside.io/

# About endpoint
curl https://signature.starside.io/about

# Health check
curl https://signature.starside.io/health
```

### JavaScript/TypeScript
```typescript
// Get random signature
const response = await fetch('https://signature.starside.io/signature');
const data = await response.json();
console.log(data.signature); // "Powered by spite,"
console.log(data.tier);      // "unleashed"

// Get specific category
const unleashed = await fetch('https://signature.starside.io/signature/unleashed');
const signature = await unleashed.json();
```

### Python
```python
import requests

# Random signature
response = requests.get('https://signature.starside.io/signature')
data = response.json()
print(f"{data['signature']} (Tier: {data['tier']})")

# Specific category
unhinged = requests.get('https://signature.starside.io/signature/unhinged')
print(unhinged.json()
```python
import requests

response = requests.get('http://localhost:3000/signature')
data = response.json()
print(data['signature'])
```

## 📄 License

Apache 2.0 — Use responsibly. Or don't. We're not the boss of you.

## 🤝 Contributing

Have an unhinged signature? PR it! Just make sure it fits one of the three tiers of chaos.

## ⚠️ Disclaimer

These signatures are meant for entertainment purposes. Use at your own professional risk. We are not responsible for any HR meetings that may result from using Tier 3 signatures.

---

**Made with 💀 and caffeinated despair**
