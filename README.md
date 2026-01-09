# ✨ Signature-as-a-Service

Ever needed an email signature that truly reflects your mood? This API serves unhinged email signatures across three carefully crafted tiers of chaos.

Built with modern TypeScript and powered by existential dread.

![signature-as-a-service](https://img.shields.io/badge/status-active-brightgreen) ![License](https://img.shields.io/github/license/starside-io/signature-as-a-service
) ![Typescript](https://img.shields.io/badge/language-Typescript-blue)

## 🎯 Signature Tiers

- **Tier 1: Unbothered** - Slightly quirky, mostly professional. For when you're mildly inconvenienced.
- **Tier 2: Unhinged** - Definitely not HR-approved. For when the mask starts slipping.
- **Tier 3: Unleashed** - Complete chaos energy. For when you've given up entirely.

## 🚀 API Usage

### Base URL
```
http://localhost:3000
```

### Endpoints

#### Get Random Signature (Any Tier)
```bash
GET /signature
```

**Example Response:**
```json
{
  "signature": "Thanks,\\n\\n--\\nSent with mild inconvenience",
  "tier": "unbothered"
}
```

#### Get Signature by Tier
```bash
GET /signature/unbothered
GET /signature/unhinged
GET /signature/unleashed
```

**Example Response:**
```json
{
  "signature": "Best regards,\\n\\n--\\nSent from a dimension where I care about this\\nUnfortunately, not this one",
  "tier": "unleashed"
}
```

#### API Info
```bash
GET /
```

Returns API documentation and available endpoints.

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
├── index.ts           # Express API server
├── signatures.json    # Signature database (3 tiers)
├── package.json
├── tsconfig.json      # Modern TypeScript config
└── README.md
```

## 🎨 Adding Your Own Signatures

Edit `signatures.json` to add more signatures:

```json
{
  "text": "Your signature text here\\n\\nWith line breaks",
  "tier": "unbothered"
}
```

Choose from tiers: `unbothered`, `unhinged`, or `unleashed`

## 🧪 Example Usage

### cURL
```bash
# Random signature
curl http://localhost:3000/signature

# Specific tier
curl http://localhost:3000/signature/unhinged
```

### JavaScript/TypeScript
```typescript
const response = await fetch('http://localhost:3000/signature/unleashed');
const data = await response.json();
console.log(data.signature);
```

### Python
```python
import requests

response = requests.get('http://localhost:3000/signature')
data = response.json()
print(data['signature'])
```

## 📄 License

MIT — Use responsibly. Or don't. We're not the boss of you.

## 🤝 Contributing

Have an unhinged signature? PR it! Just make sure it fits one of the three tiers of chaos.

## ⚠️ Disclaimer

These signatures are meant for entertainment purposes. Use at your own professional risk. We are not responsible for any HR meetings that may result from using Tier 3 signatures.

---

**Made with 💀 and caffeinated despair**
