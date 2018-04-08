//format shift + option + f
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
passport.use(new GoogleStrategy);
//clientid 398000189081-rudtgi3fvh3ogkhtsjmhu8sdhlvv1t50.apps.googleusercontent.com
//clientsecret z4Gp94VuzpwwsynjfJfASPVy

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Example app listening on port!');
});