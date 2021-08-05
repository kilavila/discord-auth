Discord-auth
============

<img src="https://img.shields.io/badge/build-failing-red" />
<img src="https://img.shields.io/badge/coverage-0%25-red" />
<br /><br />
<img src="https://img.shields.io/badge/node-14.16.0-blue" />
<img src="https://img.shields.io/badge/npm-6.14.11-blue" />
<img src="https://img.shields.io/badge/express-4.17.1-blue" />
<img src="https://img.shields.io/badge/mongoose-5.13.5-blue" />
<img src="https://img.shields.io/badge/bcrypt-5.0.1-blue" />
<img src="https://img.shields.io/badge/cors-2.8.5-blue" />
<img src="https://img.shields.io/badge/dotenv-10.0.0-blue" />
<img src="https://img.shields.io/badge/discord.js-12.5.3-blue" />
<img src="https://img.shields.io/badge/discord--buttons-4.0.0-blue" />

<br /><br />

Installing
----------

Navigate to root directory and run install:

```css
$ npm install
```

<br />

Configuring
-----------

Create a new MongoDB database and user: [https://www.mongodb.com/](https://www.mongodb.com/)

Update `environment variables` in `src/.env`:

```css
API_KEY=<insert-api-key>
DB_NAME=<insert-database-name>
DB_USER=<insert-database-username>
DB_PASS=<insert-database-password>
DISCORD_BOT_TOKEN=<insert-discord-bot-token>
```

Use the `API_KEY` when doing HTTP requests.

Environment variables are imported where it's needed, f.ex in `src/index.js`:

```css
const {
    DB_NAME,
    DB_USER,
    DB_PASS
} = process.env;
```