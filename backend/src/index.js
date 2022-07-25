const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require( './constrollers/authController')(app);
require( './constrollers/projectController')(app);

app.listen(3000);