Discord-auth
============

<img src="https://img.shields.io/badge/build-failing-red" /> <img src="https://img.shields.io/badge/coverage-0%25-red" /> <img src="https://img.shields.io/badge/node-14.16.0-blue" /> <img src="https://img.shields.io/badge/npm-6.14.11-blue" /> <img src="https://img.shields.io/badge/express-4.17.1-blue" /> <img src="https://img.shields.io/badge/mongoose-5.13.5-blue" /> <img src="https://img.shields.io/badge/bcrypt-5.0.1-blue" /> <img src="https://img.shields.io/badge/cors-2.8.5-blue" /> <img src="https://img.shields.io/badge/dotenv-10.0.0-blue" /> <img src="https://img.shields.io/badge/discord.js-12.5.3-blue" /> <img src="https://img.shields.io/badge/discord--buttons-4.0.0-blue" />

<br /><br />

Installing
----------

Navigate to root directory and run install:

```php
$ npm install
```

<br />

Configuring
-----------

Create a new MongoDB database and user: [https://www.mongodb.com/](https://www.mongodb.com/)

Create new file: `.env` in project root directory

Add `environment variables` in `.env` file:

```markdown
API_KEY=<insert-api-key>
DB_NAME=<insert-database-name>
DB_USER=<insert-database-username>
DB_PASS=<insert-database-password>
BOT_TOKEN=<insert-discord-bot-token>
```

Use the `API_KEY` when doing HTTP requests.

Environment variables are imported where it's needed, f.ex in `src/index.js`:

```js
const {
    DB_NAME,
    DB_USER,
    DB_PASS,
    BOT_TOKEN
} = process.env;
```

Add new routes, f.ex:

```js
const postsRouter = require('./routes/posts');

app.use('/posts', postsRouter);
```

Create new router for the new routes:

```js
const express = require('express');
const router = express.Router();

const { API_KEY } = process.env;

router.post('/:apiKey', (req, res) => {

    // Check API-Key
    
    // Handle request and deliver response

});

module.exports = router;
```

Create new mongoose schema, f.ex:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
```

Import schema:

```js
const Post = require('<relative-path>/post');
```