const express = require('express');

const app = express()

app.use(express.static('www'))
// app.use('/systemjs', express.static('node_modules/systemjs/dist/'));
app.use('/node_modules/', express.static('node_modules/'));
app.listen(80, function () { console.log("Server running on http://localhost/"); });