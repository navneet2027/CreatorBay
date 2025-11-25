const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/auth');
const upload = require("../config/multer");
const uploadToCloudinary = require("../utils/uploadToCloudinary");


// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// @route   POST /api/auth/signup
// @desc    Register new user
// @access  Public
router.post('/signup', async (req, res) => {
  try {
    const { name, username, email, password, role ,bio,subscriberCount,monthly,yearly,percentage_discount} = req.body;

    // Validation
    if (!name || !username || !email || !password || !role) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const userExistse = await User.findOne({ username });
    if (userExistse) {
      return res.status(400).json({ message: 'This username is not available' });
    }

    console.log(req.body.profilePic)
    // Create user
    const user = await User.create({
      name,
      username : username.trim().toLowerCase().replace(/\s+/g, "_"),
      email,
      password,
      role,
      bio,
      subscriberCount,
      monthly,
      yearly,
      percentage_discount,
      profilePic : req.body.profilePic,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        bio:user.bio,
        subscriberCount:user.subscriberCount,
        profilePic : user.profilePic,
        token: generateToken(user._id)
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      subscriberCount: user.subscriberCount,
              profilePic : user.profilePic,

      
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    res.json({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      profilePic :req.user.profilePic,
        allowed : true

    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.get('/getall', async (req, res) => {
    
    const creators = await User.find({ role: "creator" }).select("_id name username bio subscriberCount profilePic");
    
     const formatted = creators.map(c => ({
            id: c._id,
            name: c.name,
            username: c.username,
            bio: c.bio,
            subscriberCount: c.subscriberCount,
            profilePic: c.profilePic,
              allowed : false

        }));
    res.json(formatted)
});

router.get('/creator/:username', async (req, res) => {
    
    const creators = await User.find({ username: req.params.username }).select("name username bio subscriberCount monthly yearly percentage_discount profilePic");
    
     const formatted = creators.map(c => ({
            name: c.name,
            username: c.username,
            bio: c.bio,
            subscriberCount: c.subscriberCount,
            monthly:c.monthly,
            yearly:c.yearly,
            percentage_discount:c.percentage_discount,
            profilePic: c.profilePic
        }));
    res.json(formatted)
})
router.get('/creator/subscribers/:username', async (req, res) => {
    
    const [creators] = await User.find({ username: req.params.username }).select("name username bio subscriberCount monthly yearly percentage_discount profilePic");
    
  
    res.json({subscribers: creators.subscriberCount,monthly:creators.monthly,yearly:creators.yearly,discount:creators.percentage_discount,profilePic: creators.profilePic});
})

router.post(`/creator/pricing/:username`,protect,async (req,res) => {
   const newuser = await User.findOneAndUpdate(
        { username: req.params.username},
        {  $set: { monthly: req.body.monthly , yearly: req.body.yearly, percentage_discount: req.body.percentage_discount}},
        { new: true }
        
      );

    res.json(newuser)
})


router.post("/profilepic", upload.single("profilePic"), protect, async (req, res) => {
  const imageUrl = await uploadToCloudinary(req.file.path);

  await User.findByIdAndUpdate(req.user._id, {
    profilePic: imageUrl
  });

  res.json({ success: true, url: imageUrl });
});



module.exports = router;