const User = require('../models/User');
const passport = require('passport');

const renderSignupForm = (req, res) => {
  res.render('users/signup');
};

const signupUser = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    errors.push({ text: 'Passwords do not match!' });
  }
  if (password.length < 4) {
    errors.push({ text: 'Passwords must be at least 4 characters!' });
  }
  if (errors.length) {
    res.render('users/signup', { errors, name, email });
    return;
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    req.flash('error_msg', 'The email is alredy in use!');
    res.redirect('/users/signup');
    return;
  }
  const newUser = new User({
    name,
    email,
    password,
  });
  newUser.password = await newUser.encryptPassword(password);
  await newUser.save();
  req.flash('success_msg', 'You are registered!');
  res.redirect('/users/signin');
};

const renderSigninForm = (req, res) => {
  res.render('users/signin');
};

const signinUser = passport.authenticate('local', {
  failureRedirect: '/users/signin',
  successRedirect: '/notes',
  failureFlash: true,
});

const logoutUser = (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out!');
  res.redirect('/users/signin');
};

module.exports = {
  renderSignupForm,
  signupUser,
  renderSigninForm,
  signinUser,
  logoutUser,
};
