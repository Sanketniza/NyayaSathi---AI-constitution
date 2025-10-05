import express from 'express';
import {
  registerUser,
  verifyEmail,
  loginUser,
  logoutUser,
  refreshToken,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} from '../controllers/user-controller.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);          // Register and send verification OTP
router.post('/verify-email', verifyEmail);       // Verify email with OTP
router.post('/login', loginUser);                // Login, returns tokens
router.post('/refresh-token', refreshToken);    // Exchange refresh token for access token
router.post('/forgot-password', forgotPassword);// Send OTP for password reset
router.post('/reset-password', resetPassword);  // Reset password using OTP

// Protected routes (require auth)
router.post('/logout', protect, logoutUser);
router.get('/me', protect, getUserProfile);
router.put('/me', protect, updateUserProfile);

// Admin routes
router.get('/', protect, admin, getAllUsers);
router.delete('/:id', protect, admin, deleteUser);

export default router;
