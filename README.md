# ZBD + NextAuth.js

![](https://i.imgur.com/cNvtTQh.png)

This is a repo containing the code for the ZBD + NextAuth.js integration for ZBD OAuth2 flows.

## Full Guide

To read full guide and more information about ZBD OAuth2 APIs, check the [zbd.dev documentation here](https://zbd.dev/docs/zbd-login/integrations/next).

## Installation

```bash
yarn
```

## Environment Variables

Create a `.env.local` just like `.env.local.example` and load up your own values.

```
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="ed2e6f6ea6da94bf0276a7130d98e7ed"

AUTH_ZBD_ID="fcf166b9-aea0-28bb-8f63-844df37ad087"
AUTH_ZBD_SECRET="e3435ve6-6855-4a11-9ff1-7c9dc01d6c17"
AUTH_ZBD_LIVE_KEY="43ZCQ4XBF15UJWC40lljrwan7AJ333BA"
```

## Running the app

```bash
yarn dev
```
