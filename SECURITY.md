# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Signature-as-a-Service seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing:

**mederic.burlet@gmail.com**

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

### What to Include

Please include the following information in your report to help us better understand the nature and scope of the issue:

- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### What to Expect

After you submit a vulnerability report, here's what happens:

1. **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours.
2. **Investigation**: We will investigate the issue and determine its impact and severity.
3. **Updates**: We will keep you informed about our progress as we work on a fix.
4. **Resolution**: Once we've resolved the issue, we will release a security patch.
5. **Credit**: We will credit you in the release notes (unless you prefer to remain anonymous).

## Security Best Practices

### For Users

When deploying this API in production, we recommend:

1. **Use HTTPS**: Always deploy behind a reverse proxy (like nginx or Cloudflare) that enforces HTTPS
2. **Environment Variables**: Never commit sensitive environment variables or API keys to version control
3. **Rate Limiting**: The built-in rate limiter (120 req/min) is enabled by default; adjust based on your needs
4. **Keep Dependencies Updated**: Regularly update npm dependencies to patch known vulnerabilities
5. **Network Security**: Deploy in a secure network environment with appropriate firewall rules
6. **Monitoring**: Implement logging and monitoring to detect unusual activity

### For Contributors

When contributing to this project:

1. **Dependency Security**: Run `npm audit` before submitting pull requests
2. **No Secrets**: Never commit secrets, API keys, or sensitive data
3. **Code Review**: All code changes require review before merging
4. **Input Validation**: Always validate and sanitize user inputs
5. **Dependencies**: Only add dependencies from trusted sources and keep them minimal

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.1, 1.0.2) and will be documented in the release notes. Critical security updates will be clearly marked.

To stay informed about security updates:

- Watch this repository on GitHub
- Check the [Releases](https://github.com/starside-io/signature-as-a-service/releases) page regularly
- Enable security alerts in your GitHub settings

## Known Security Considerations

### Rate Limiting

This API includes built-in rate limiting (120 requests per minute per IP address). This helps prevent:
- Denial of Service (DoS) attacks
- API abuse
- Resource exhaustion

### CORS

Cross-Origin Resource Sharing (CORS) is enabled by default to allow browser-based clients. If you're deploying in a production environment where you need to restrict origins, configure CORS appropriately by modifying the middleware in `index.ts`.

### Input Validation

Currently, the API has minimal user input (URL parameters for signature categories). All category inputs are validated against a whitelist of allowed values (`unbothered`, `unhinged`, `unleashed`).

## Disclosure Policy

When we receive a security vulnerability report, we commit to:

- Working with the reporter to understand and validate the issue
- Developing and testing a fix as quickly as possible
- Releasing a security update with appropriate credit to the reporter
- Publicly disclosing the vulnerability details only after a fix is available

We ask that security researchers:

- Allow us reasonable time to address the issue before public disclosure
- Make a good faith effort to avoid privacy violations, destruction of data, and service interruption
- Do not exploit the vulnerability beyond what is necessary to demonstrate it

## Security-Related Configuration

### Environment Variables

- `PORT`: The port the API listens on (default: 3000)
- `NODE_ENV`: Set to `production` in production environments

No other sensitive environment variables are currently required by this application.

## Additional Resources

- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
- [npm Security Advisories](https://www.npmjs.com/advisories)

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENCE) file for details.

---

**Last Updated**: January 2026

Thank you for helping keep Signature-as-a-Service and its users safe!
