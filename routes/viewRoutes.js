const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

// router.use(authController.isLoggedIn);

router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewController.getOverview
);
router.get('/tour/:slug', authController.isLoggedIn, viewController.getTour);
router.get('/login', authController.isLoggedIn, viewController.login);
router.get('/signup', authController.isLoggedIn, viewController.signup);
router.get(
  '/forgot-password',
  authController.isLoggedIn,
  viewController.forgotPassword
);
// router.get(
//   '/reset-password/:token',
//   authController.isLoggedIn,
//   viewController.resetPassword
// );
router.get('/me', authController.protect, viewController.getAccount);
router.get('/my-tours', authController.protect, viewController.getMyTours);

// router.post('/submit-user-data', authController.protect, viewController.)

module.exports = router;
