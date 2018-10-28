const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({hi: 'there'});
});

// Dynamically bind port to looki into the underlying environment, like in heroku we can fetch the port to be used
const PORT = process.env.PORT || 5000;

app.listen(PORT);

