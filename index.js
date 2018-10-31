const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

// Dynamically bind port to looki into the underlying environment, like in heroku we can fetch the port to be used
const PORT = process.env.PORT || 5000;

app.listen(PORT);

