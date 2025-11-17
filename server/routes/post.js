const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Subscription = require('../models/Subscription');
const { protect, creatorOnly } = require('../middleware/auth');

// @route   GET /api/posts
// @desc    Get all posts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('creator_id', 'name email bio')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/posts/creator/:creatorId
// @desc    Get posts by creator
// @access  Public
router.get('/creator/:creatorId', async (req, res) => {
  try {
    const posts = await Post.find({ creator_id: req.params.creatorId })
      .populate('creator_id', 'name email bio')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/posts/accessible/:creatorId
// @desc    Get accessible posts for user (free + subscribed paid)
// @access  Private
router.get('/accessible/:creatorId', protect, async (req, res) => {
  try {
    const { creatorId } = req.params;
    
    // Check if user has active subscription
    const subscription = await Subscription.findOne({
      user_id: req.user._id,
      creator_id: creatorId,
      payment_status: 'active',
      end_date: { $gt: new Date() }
    });

    let query = { creator_id: creatorId };
    
    // If not subscribed, only show free posts
    if (!subscription) {
      query.access_type = 'free';
    }

    const posts = await Post.find(query)
      .populate('creator_id', 'name email bio')
      .sort({ createdAt: -1 });
    
    res.json({ posts, isSubscribed: !!subscription });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   POST /api/posts
// @desc    Create new post
// @access  Private (Creator only)
router.post('/', protect, creatorOnly, async (req, res) => {
  try {
    const { title, description, image_url, access_type } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Please provide title and description' });
    }

    const post = await Post.create({
      title,
      description,
      image_url: image_url || '',
      access_type: access_type || 'free',
      creator_id: req.user._id
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   PUT /api/posts/:id
// @desc    Update post
// @access  Private (Creator only)
router.put('/:id', protect, creatorOnly, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if user owns the post
    if (post.creator_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this post' });
    }

    const { title, description, image_url, access_type } = req.body;

    post.title = title || post.title;
    post.description = description || post.description;
    post.image_url = image_url || post.image_url;
    post.access_type = access_type || post.access_type;

    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   DELETE /api/posts/:id
// @desc    Delete post
// @access  Private (Creator only)
router.delete('/:id', protect, creatorOnly, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if user owns the post
    if (post.creator_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }

    await post.deleteOne();

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/posts/my-posts
// @desc    Get creator's own posts
// @access  Private (Creator only)
router.get('/my-posts', protect, creatorOnly, async (req, res) => {
  try {
    const posts = await Post.find({ creator_id: req.user._id })
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;