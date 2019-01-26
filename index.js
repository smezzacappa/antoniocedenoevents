var express = require('express');
var app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('favocmatic'));
app.use(express.static('index.html'));
app.listen(PORT, () => console.log(`app listening on ${PORT}`));