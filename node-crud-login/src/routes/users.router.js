const { Router } = require('express');
const {
  renderSignupForm,
  signupUser,
  renderSigninForm,
  signinUser,
  logoutUser,
} = require('../controllers/users.controller');

const router = Router();

router.get('/signup', renderSignupForm);
router.post('/signup', signupUser);

router.get('/signin', renderSigninForm);
router.post('/signin', signinUser);

router.get('/logout', logoutUser);

module.exports = router;
