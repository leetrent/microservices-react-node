const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (request, response) => {
    const event = request.body;

    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);
    axios.post('http://localhost:4003/events', event);

    response.send({ status: 'OK' });
});

app.listen(4005, () => {
    console.log('Event bus listening on port 4005 ...');
});