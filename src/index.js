require('dotenv').config();

// environment variables from .env file
const {
    DB_NAME,
    DB_USER,
    DB_PASS,
    BOT_TOKEN
} = process.env;

// port for server to listen on
const port = 3000;

// import required libraries
const express = require('express');
const mongoose = require('mongoose');
const Discord = require('discord.js');
const cors = require('cors');

const client = new Discord.Client();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// mongoDB config
const database = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.sgmdg.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

// connect to database
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {

        const databaseName = res.connections[0].name;
        console.log('');
        console.log(`Connected to database: ${databaseName}`);

        // server listening on port after database connection
        app.listen(port, (err) => {

            if (err) {
                console.log(err);
            }

            console.log(`Server listening on port ${port}`);

            // discord bot on ready
            client.on('ready', () => {
            
                console.log('Discord BOT online');
                console.log('------------------');
                console.log('');
            
            });

            // discord bot login after server listening
            client.login(BOT_TOKEN);

        });

    })
    .catch((err) => {
        console.log(err);
    });

// import required routes
const loginRoute = require('./routes/auth/login');
const registerRoute = require('./routes/auth/register');

// use routes
app.use('/login', loginRoute);
app.use('/register', registerRoute);