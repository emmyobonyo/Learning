// Install Passport npm install passport
// Install passport-google-oauth20
const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-google-ouath20');
const helmet = require('helmet');

passport.use(new Strategy({}));

const app = express();
app.use(helmet());

app.use(passport.initialize());
