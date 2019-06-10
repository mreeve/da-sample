const express = require('express');

const app = express()
const port = 3000;

app.use(express.static('www'))
// app.use('/systemjs', express.static('node_modules/systemjs/dist/'));
app.use('/node_modules/', express.static('node_modules/'));
app.listen(port, function () { console.log(`Server running on http://localhost/${port}`); });