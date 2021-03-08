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

We use [docs](https://www.npmjs.com/package/dotenv) to keep secrets.

> ⚠️ The `.env` file containing the secrets is included in `.gitignore` and will not be tracked

You need to add the file to root and the following secrets yourself:
- `TYPEORM_CONNECTION`: type of database to use
- `TYPEORM_HOST`: database host adress
- `TYPEORM_PORT`: database port
- `TYPEORM_USERNAME`: username with database access rights
- `TYPEORM_PASSWORD`: password for username
- `TYPEORM_DATABASE`: database name
- `TYPEORM_SYNCHRONIZE`: enable synchronization of entites every time the app is run
- `TYPEORM_LOGGING`: enable logging
- `TYPEORM_ENTITIES`: the entity file locations

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
