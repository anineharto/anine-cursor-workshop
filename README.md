# Cursor Workshop

A starter project for learning AI-assisted development with Cursor.

## Project Structure

```
cursor-workshop/
├── frontend/          # Next.js application
├── backend/           # Express API server
└── micros/            # Micro-frontends (navbar, footer)
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development servers

```bash
npm run dev
```

This starts both:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### Run individually

```bash
npm run dev:frontend    # Frontend only
npm run dev:backend     # Backend only
```

## API Endpoints

- `GET /api/posts` - List blog posts
- `GET /api/posts/:slug` - Get single post
- `GET /api/tags` - Get all tags
- `GET /api/health` - Health check

## GitHub Action: Claude via AI Foundry

This repo includes a manual workflow at `.github/workflows/claude-ai-foundry.yml`
that sends a prompt to a Claude model hosted in Azure AI Foundry.

### Required GitHub secrets

- `ANTHROPIC_BASE_URL` (example: `https://<your-endpoint>.services.ai.azure.com`)
- `ANTHROPIC_FOUNDRY_API_KEY`

### Run it

1. Open **Actions** in your GitHub repo.
2. Select **Claude via AI Foundry**.
3. Click **Run workflow** and provide:
   - `prompt` (required)
   - `model` (defaults to `claude-3-5-sonnet`)
   - `max_tokens` (defaults to `600`)

The response is added to the workflow summary and uploaded as an artifact.
