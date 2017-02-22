const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/src')));
app.set('port', process.env.PORT || 8000);
app.locals.title = 'Secret Box';

app.get('/', (request, response) => {
  response.send('It\'s a secret to everyone.');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
