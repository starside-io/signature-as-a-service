export const viewerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/favicon.png">
    <title> Signature-as-a-Service</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #0a0a0a;
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            overflow: hidden;
        }
        body::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 20% 20%, rgba(220, 38, 38, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(185, 28, 28, 0.1) 0%, transparent 50%);
            animation: backgroundShift 20s ease-in-out infinite;
            pointer-events: none;
        }
        @keyframes backgroundShift {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        .container {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 1;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo img {
            width: 150px;
            height: auto;
        }
        h1 {
            text-align: center;
            margin-bottom: 10px;
            background: linear-gradient(135deg, #ffffff, #ef4444);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 32px;
            font-weight: 700;
        }
        .subtitle {
            text-align: center;
            color: #d1d5db;
            margin-bottom: 30px;
        }
        .signature-box {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
            min-height: 120px;
            white-space: pre-wrap;
            font-family: monospace;
            font-size: 14px;
            line-height: 1.6;
            color: #ffffff;
            box-shadow: 0 4px 16px rgba(239, 68, 68, 0.1);
        }
        .tier-badge {
            display: inline-block;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 15px;
            text-transform: uppercase;
            border: 1px solid rgba(239, 68, 68, 0.3);
        }
        .tier-unbothered { 
            background: rgba(239, 68, 68, 0.1); 
            color: #ef4444;
            border-color: rgba(239, 68, 68, 0.3);
        }
        .tier-unhinged { 
            background: rgba(220, 38, 38, 0.15); 
            color: #ef4444;
            border-color: rgba(239, 68, 68, 0.4);
        }
        .tier-unleashed { 
            background: rgba(220, 38, 38, 0.25); 
            color: #ffffff;
            border-color: rgba(239, 68, 68, 0.5);
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
        }
        .controls {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        button {
            flex: 1;
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        .btn-primary {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);
        }
        .btn-primary:hover {
            box-shadow: 0 8px 24px rgba(239, 68, 68, 0.5);
            transform: translateY(-2px);
        }
        .btn-copy {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .btn-copy:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(239, 68, 68, 0.4);
            transform: translateY(-2px);
        }
        .btn-copy.copied {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            border-color: transparent;
        }
        .category-buttons {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-bottom: 20px;
        }
        .btn-category {
            padding: 10px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #ffffff;
            font-size: 13px;
        }
        .btn-category:hover {
            border-color: rgba(239, 68, 68, 0.5);
            background: rgba(220, 38, 38, 0.15);
            box-shadow: 0 4px 16px rgba(239, 68, 68, 0.2);
        }
        .footer {
            text-align: center;
            color: #d1d5db;
            font-size: 12px;
            margin-top: 20px;
        }
        .footer a {
            color: #ef4444;
            text-decoration: none;
            transition: color 0.3s;
        }
        .footer a:hover {
            color: #dc2626;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="/saas.png" alt="Signature-as-a-Service Logo" />
        </div>
        <h1>✨ Signature-as-a-Service</h1>
        <p class="subtitle">Unhinged email signatures for every occasion</p>
        
        <div id="tierBadge"></div>
        <div class="signature-box" id="signatureBox">Click "Get Random" to generate a signature...</div>
        
        <div class="controls">
            <button class="btn-primary" onclick="getSignature()">🎲 Get Random</button>
            <button class="btn-copy" id="copyBtn" onclick="copySignature()">📋 Copy</button>
        </div>
        
        <div class="category-buttons">
            <button class="btn-category" onclick="getSignature('unbothered')">😌 Unbothered</button>
            <button class="btn-category" onclick="getSignature('unhinged')">🤪 Unhinged</button>
            <button class="btn-category" onclick="getSignature('unleashed')">🔥 Unleashed</button>
        </div>
        
        <div class="footer">
            Made with 💀 and caffeinated despair<br><br>
            © 2025 <a href="https://starside.io" target="_blank">Starside Labs</a>. Transforming the future through AI.
        </div>
    </div>
    
    <script>
        let currentSignature = '';
        
        async function getSignature(category = '') {
            const url = category ? \`/signature/\${category}\` : '/signature';
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.signature) {
                    currentSignature = data.signature;
                    document.getElementById('signatureBox').textContent = data.signature;
                    
                    const badge = document.getElementById('tierBadge');
                    badge.className = \`tier-badge tier-\${data.tier}\`;
                    badge.textContent = \`Tier: \${data.tier}\`;
                }
            } catch (error) {
                document.getElementById('signatureBox').textContent = 'Error loading signature. Please try again.';
            }
        }
        
        async function copySignature() {
            if (!currentSignature) return;
            
            try {
                await navigator.clipboard.writeText(currentSignature);
                const btn = document.getElementById('copyBtn');
                btn.textContent = '✅ Copied!';
                btn.classList.add('copied');
                
                setTimeout(() => {
                    btn.textContent = '📋 Copy';
                    btn.classList.remove('copied');
                }, 2000);
            } catch (error) {
                alert('Failed to copy. Please try again.');
            }
        }
        
        // Load a random signature on page load
        getSignature();
    </script>
</body>
</html>`;
