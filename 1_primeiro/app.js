require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 40000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/dw3', (req, res) => {
    res.send('Hello World!');
});

app.get('/status', (req, res) => {
    res.json({
        status: 'OK',
        appName: process.env.APP_NAME || '1_Primeiro',
        port: process.env.PORT || '80'
    });
});

app.listen(PORT, () => {
    console.log("Aplicattion:", process.env.APP_NAME);
    console.log(`Server is running on port ${PORT}`);
});