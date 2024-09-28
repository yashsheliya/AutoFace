// backend/routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, logoutUser, updateUserProfile, changePassword, forgotPassword ,getUserProfile } = require('../controllers/authController'); // Ensure changePassword and forgotPassword are imported
const router = express.Router();
const { protect } = require('../middleware/authMiddleware'); // Middleware for protected routes

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.put('/profile', protect, updateUserProfile);
router.put('/change-password', protect, changePassword);
router.post('/forgot-password', forgotPassword);
router.get('/profile', protect, getUserProfile);
module.exports = router;
