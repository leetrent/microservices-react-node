const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { request } = require('express');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
    if ( type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }

    if ( type === 'CommentCreated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        post.comments.push({ id, content, status });
    }

    if ( type === 'CommentUpdated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
        });
        comment.status = status;
        comment.content = content;
    }
};

app.get('/posts', (request, response) => {
    console.log("[query service][get][posts] => (posts): ");
    console.log(posts);
    response.send(posts);
});

app.post('/events', (request, response) => {
    console.log("[query service][post][events] =>"); 
    const { type, data } = request.body;
    console.log(`[query service][post][events] => (type): ${type}`);
    console.log(`[query service][post][events] => (data): ${data}`);
    handleEvent(type, data);
    response.send({});
});

app.listen(4002, async () => {
    console.log("Query Service listening on port 4002 ...")
    const response = await axios.get('http://event-bus-srv:4005/events')
    for (let event of response.data) {
        console.log('[query service][listen][4002] => Processing event from event-bus');
        console.log(`[query service][listen][4002] => (event.type): ${event.type}`);
        console.log(`[query service][listen][4002] => (event.data): ${event.data}`);
        handleEvent(event.type, event.data);
    }
});