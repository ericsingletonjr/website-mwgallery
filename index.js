'use strict';

require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const ROOT = {root: './public'};

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));


app.listen(PORT, () => console.log(`Listening on ${PORT}`));