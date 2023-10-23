"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const url = require('url');
const PORT = 3000;
const app = express();
app.get('/ping', (req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {
        res.json(req.headers);
    }
    else {
        res.status(404).end();
    }
});
app.use((req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log('Server Express with Typescript is runing on port 3000');
});
 