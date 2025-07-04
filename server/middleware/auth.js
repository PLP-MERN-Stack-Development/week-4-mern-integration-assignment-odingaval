// auth.js - JWT authentication middleware

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to protect routes
exports.protect = async (req, res, next) => {
  let token;

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  console.log('Authorization header:', req.headers.authorization);
  console.log('Extracted token:', token ? 'Token exists' : 'No token');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ error: 'Not authorized to access this route' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    console.log('Decoded token:', decoded);
    
    // Get user from token
    const user = await User.findById(decoded.userId).select('-password');
    console.log('Found user:', user ? user.username : 'No user found');
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    console.error('JWT Secret used:', process.env.JWT_SECRET ? 'Secret exists' : 'Using default secret');
    return res.status(401).json({ error: 'Not authorized to access this route', details: error.message });
  }
};

// Middleware to authorize specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: `User role ${req.user.role} is not authorized to access this route` 
      });
    }
    next();
  };
}; 