# Laverage AI website

Static marketing site for Laverage AI, served with Nginx.

## Alloy development

Start the site with Docker Compose:

```sh
docker compose -f docker-compose.alloy.yaml up -d
```

The site is available on port `3000`, and its health endpoint is `/health`.
