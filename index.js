const path = require('path');
const express = require('express');
const app = express();

const publicDirPath = path.resolve(__dirname, 'public');
const serviceAPublicPath = path.resolve(__dirname, 'modules', 'service-a', 'dist');
const serviceBPublicPath = path.resolve(__dirname, 'modules', 'service-b', 'dist');

app.use('/public', express.static('public'));
app.use('/service-a', express.static(serviceAPublicPath));
app.use('/service-b', express.static(serviceBPublicPath));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(publicDirPath, 'index.html'));
});

app.get('/service-a', function (req, res) {
  res.sendFile(path.resolve(serviceAPublicPath, 'index.html'));
});

app.get('/service-b', function (req, res) {
  res.sendFile(path.resolve(serviceBPublicPath, 'index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
