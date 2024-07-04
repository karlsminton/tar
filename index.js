const express = require('express');
app = express();
const port = '3003';

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log('webapp listening on port %s', 3003);
});
