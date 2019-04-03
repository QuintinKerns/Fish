'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser);
app.post('/', (res, req) => {
    console.log(req);
    req.redirect("https://www.linkedin.com/uas/login");
});

module.exports.handler = serverless(app);