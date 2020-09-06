const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (request, response) => {

    const event = request.body;
    events.push(event);

    console.log(`[event-bus service][post][events] => (event): ${event}`);
    
    console.log("[event-bus service][post][events] => (Posting event to posts microservice)");
    axios.post('http://posts-clusterip-srv:4000/events', event);

    console.log("[event-bus service][post][events] => (Posting event to comments microservice)");
    axios.post('http://comments-srv:4001/events', event);

    console.log("[event-bus service][post][events] => (Posting event to query microservice)");
    axios.post('http://query-srv:4002/events', event);

    console.log("[event-bus service][post][events] => (Posting event to moderation microservice)");
    axios.post('http://moderation-srv:4003/events', event);

    console.log("[event-bus service][post][events] => (Returning status of 'OK')");

    response.send({ status: 'OK' });
});

app.get('/events', (request, response) => {
    console.log("[event-bus service][get][events] => (events): ");
    console.log(events);
    response.send(events);
});


app.listen(4005, () => {
    console.log('Event bus listening on port 4005 ...');
});