Discord-auth
============

<img src="https://img.shields.io/badge/build-failing-red" /> <img src="https://img.shields.io/badge/coverage-0%25-red" /> <img src="https://img.shields.io/badge/node-14.16.0-blue" /> <img src="https://img.shields.io/badge/npm-6.14.11-blue" /> <img src="https://img.shields.io/badge/express-4.17.1-blue" /> <img src="https://img.shields.io/badge/mongoose-5.13.5-blue" /> <img src="https://img.shields.io/badge/bcrypt-5.0.1-blue" /> <img src="https://img.shields.io/badge/cors-2.8.5-blue" /> <img src="https://img.shields.io/badge/dotenv-10.0.0-blue" /> <img src="https://img.shields.io/badge/discord.js-12.5.3-blue" /> <img src="https://img.shields.io/badge/discord--buttons-4.0.0-blue" />

**Authenticate logins with discord bot.**<br />
Create a bot and add it to your discord server so that users can receive authentication messages when logging in to your website.

<br />

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

Create new file: `.env` in project root directory.

Add `environment variables` in `.env` file:

```markdown
API_KEY=<insert-api-key>
DB_NAME=<insert-database-name>
DB_USER=<insert-database-username>
DB_PASS=<insert-database-password>
BOT_TOKEN=<insert-discord-bot-token>
```

> Don't make the `.env` file or it's content public.

Use the `API_KEY` when sending HTTP requests, only requests with correct key will be handled.

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
    
    // Handle request

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

<br />

Starting server
---------------

Navigate to root directory and run:

```php
$ node ./src/index.js
```

Scripts in `package.json` to make it easier to start and develop, f.ex:

```json
{
    "scripts": {
        "start": "node ./src/index.js",
        "dev": "nodemon ./src/index.js"
    }
}
```

Now you can run:

```php
$ npm start
```

and

```php
$ npm run dev
```

Nodemon restarts the server each time you save a file, which is great when developing.

<br />

Deploying
---------

Add request origins to `allowList`:

```js
const allowList = [
    'https://example.com',
    'https://your-website.org'
];

const corsOptionsDelegate = (req, callback) => {

    let corsOptions;

    if (allowList.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true }
    } else {
        corsOptions = { origin: false }
    }

    callback(null, corsOptions);

}

app.use(cors(corsOptionsDelegate));
```

Only websites and IP addresses added to `allowList` will be able to send requests to the server.