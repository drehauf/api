# api

## Description

GraphQL endpoint for drehauf.

## Table Of Contents
- [Installation](#installation)
- [Running the app](#running-the-app)
    - [Development Secrets](#development-secrets)
- [Test](#test)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Development Secrets
> ⚠️ The `.env` file containing the secrets is included in `.gitignore` and will not be tracked

You need to add the file and the following secrets yourself:
- `TOP_SECRET`: does nothing yet

See [docs](https://www.npmjs.com/package/dotenv) or more information 

## Test

```bash
# unit tests
$ npm run test

# unit tests on watch mode
$ npm run test:watch

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
