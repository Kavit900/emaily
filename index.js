const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// All the use methods are kind of middleware

// this statement tells our app to make use of cookies in our application
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// Dynamically bind port to looki into the underlying environment, like in heroku we can fetch the port to be used
const PORT = process.env.PORT || 5000;

app.listen(PORT);

