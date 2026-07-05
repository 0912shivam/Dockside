# Dockside

Dockside is a minimal Dockerized Node.js server that returns a friendly welcome message over plain HTTP. It is intentionally small, but it is a solid starting point for learning the basics of containerized app delivery: a single service, a clean `Dockerfile`, and a simple startup flow.

## What it does

- Starts a Node.js HTTP server on port `3000`
- Responds with a simple text welcome page
- Runs the app inside a lightweight Alpine-based Docker image

## Why this project exists

This repository is a practical starter template for anyone learning how to package and run a Node.js app with Docker. It shows the full path from source code to container in the smallest possible setup, which makes it useful for:

- Docker basics and local container testing
- Learning how a Node app is structured
- Creating a tiny base project for future features
- Demonstrating deployment-ready habits early

## Tech Stack

- Node.js
- Native `node:http`
- Docker

## Run locally

Install dependencies and start the server:

```bash
npm install
npm start
```

Then open:

```text
http://localhost:3000
```

## Run with Docker

Build the image:

```bash
docker build -t dockside .
```

Run the container:

```bash
docker run -p 3000:3000 dockside
```

## Project Structure

- `app.js` - creates and starts the HTTP server
- `Dockerfile` - builds the container image
- `package.json` - project metadata and npm scripts

## Suggested Next Steps

If you want to grow this project, the next natural upgrades would be:

- Add routing with Express
- Serve an HTML landing page instead of plain text
- Add health checks for Docker
- Add tests and a CI workflow
- Add environment-based configuration

## Name

The name Dockside fits well because the app is small, container-focused, and easy to load into a Docker workflow.