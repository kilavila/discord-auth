require('dotenv').config();

const {
    DB_NAME,
    DB_USER,
    DB_PASS,
    BOT_TOKEN
} = process.env;

const port = 3000;

const express = require('express');
const mongoose = require('mongoose');
const Discord = require('discord.js');
const cors = require('cors');

const client = new Discord.Client();

const app = express();

app.use(express.json());
app.use(cors());

const database = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.sgmdg.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {

        const databaseName = res.connections[0].name;
        console.log('');
        console.log(`Connected to database: ${databaseName}`);

        app.listen(port, (err) => {

            if (err) {
                console.log(err);
            }

            console.log(`Server listening on port ${port}`);

            client.on('ready', () => {
            
                console.log('Discord BOT online');
                console.log('------------------');
                console.log('');
            
            });

            client.login(BOT_TOKEN);

        });

    })
    .catch((err) => {
        console.log(err);
    });

const loginRoute = require('./routes/auth/login');
const registerRoute = require('./routes/auth/register');

app.use('/login', loginRoute);
app.use('/register', registerRoute);