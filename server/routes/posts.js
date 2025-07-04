// posts.js - Express router for blog posts

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { body, validationResult } = require('express-validator');
const postController = require('../controllers/postController');
const { protect, authorize } = require('../middleware/auth');

// @route   GET /api/posts
// @desc    Get all posts
router.get('/', postController.getAllPosts);

// @route   GET /api/posts/:id
// @desc    Get a single post by ID
router.get('/:id', postController.getPostById);

// @route   POST /api/posts
// @desc    Create a new post
router.post(
  '/',
  protect,
  [
    body('title')
      .notEmpty().withMessage('Title is required')
      .isLength({ max: 100 }).withMessage('Title cannot exceed 100 characters'),
    body('content')
      .notEmpty().withMessage('Content is required'),
    body('category')
      .notEmpty().withMessage('Category is required')
      .isMongoId().withMessage('Category must be a valid category ID'),
  ],
  postController.createPost
);

// @route   PUT /api/posts/:id
// @desc    Update a post
router.put(
  '/:id',
  protect,
  [
    body('title')
      .optional()
      .isLength({ max: 100 }).withMessage('Title cannot exceed 100 characters'),
    body('content')
      .optional(),
    body('category')
      .optional()
      .isMongoId().withMessage('Category must be a valid category ID'),
  ],
  postController.updatePost
);

// @route   DELETE /api/posts/:id
// @desc    Delete a post
router.delete('/:id', protect, postController.deletePost);

module.exports = router; 