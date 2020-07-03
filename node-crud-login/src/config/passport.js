const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'Not user found!' });
      }
      const isAuthenticated = await user.comparePassword(password);
      if (!isAuthenticated) {
        return done(null, false, { message: 'Incorrect password!' });
      }
      return done(null, user);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
