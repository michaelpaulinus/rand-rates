# rand-rates

This is a twitter bot that tweets the daily Rand value against USD, EUR and GBP
at 12pm.

You can follow the bot [here](https://twitter.com/rand_rates).

The data is sourced from [TraderMade](https://tradermade.com/).

## Pre-requisites

- Node.js (v20 or later)
- npm

## Project Setup

```bash
npm install
```

## Project secrets

Add your secrets in a `.env` following the structure of `.env.example`

## Run Project

```bash
npx ts-node ./src/main.ts
```
