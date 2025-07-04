// categories.js - Express router for blog categories

const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const { body, validationResult } = require('express-validator');
const categoryController = require('../controllers/categoryController');

// @route   GET /api/categories
// @desc    Get all categories
router.get('/', categoryController.getAllCategories);

// @route   POST /api/categories
// @desc    Create a new category
router.post(
  '/',
  [
    body('name')
      .notEmpty().withMessage('Name is required')
      .isLength({ max: 50 }).withMessage('Name cannot exceed 50 characters'),
    body('description')
      .optional()
      .isLength({ max: 200 }).withMessage('Description cannot exceed 200 characters'),
  ],
  categoryController.createCategory
);

module.exports = router; 