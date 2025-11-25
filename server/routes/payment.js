// const express = require('express');
// const router = express.Router();
// const Razorpay = require('razorpay');
// const crypto = require('crypto');
// const Subscription = require('../models/Subscription');
// const User = require('../models/User');
// const { protect } = require('../middleware/auth');

// // Initialize Razorpay
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET
// });

// // @route   POST /api/payment/create-order
// // @desc    Create Razorpay order
// // @access  Private
// router.post('/create-order', protect, async (req, res) => {
//   try {
//     const { creator_id, amount } = req.body;

//     if (!creator_id || !amount) {
//       return res.status(400).json({ message: 'Please provide creator_id and amount' });
//     }

//     // Check if creator exists
//     const creator = await User.findById(creator_id);
//     if (!creator || creator.role !== 'creator') {
//       return res.status(404).json({ message: 'Creator not found' });
//     }

//     // Check if already subscribed
//     const existingSubscription = await Subscription.findOne({
//       user_id: req.user._id,
//       creator_id,
//       payment_status: 'active',
//       end_date: { $gt: new Date() }
//     });

//     if (existingSubscription) {
//       return res.status(400).json({ message: 'Already subscribed to this creator' });
//     }

//     // Create Razorpay order
//     const options = {
//       amount: amount * 100, // Convert to paise
//       currency: 'INR',
//       receipt: `receipt_${Date.now()}`
//     };

//     const order = await razorpay.orders.create(options);

//     res.json({
//       order_id: order.id,
//       amount: order.amount,
//       currency: order.currency,
//       key_id: process.env.RAZORPAY_KEY_ID
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// // @route   POST /api/payment/verify
// // @desc    Verify payment and create subscription
// // @access  Private
// router.post('/verify', protect, async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       creator_id,
//       amount
//     } = req.body;

//     // Verify signature
//     const sign = razorpay_order_id + '|' + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
//       .update(sign.toString())
//       .digest('hex');

//     if (razorpay_signature === expectedSign) {
//       // Payment is verified, create subscription
//       const endDate = new Date();
//       endDate.setMonth(endDate.getMonth() + 1); // 1 month subscription

//       const subscription = await Subscription.create({
//         user_id: req.user._id,
//         creator_id,
//         payment_status: 'active',
//         razorpay_order_id,
//         razorpay_payment_id,
//         amount: amount / 100, // Convert from paise
//         start_date: new Date(),
//         end_date: endDate
//       });

//       res.json({
//         message: 'Payment verified successfully',
//         subscription
//       });
//     } else {
//       res.status(400).json({ message: 'Invalid signature' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// // @route   GET /api/payment/subscriptions
// // @desc    Get user's subscriptions
// // @access  Private
// router.get('/subscriptions', protect, async (req, res) => {
//   try {
//     const subscriptions = await Subscription.find({ user_id: req.user._id })
//       .populate('creator_id', 'name email bio')
//       .sort({ createdAt: -1 });
//     res.json(subscriptions);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// // @route   GET /api/payment/subscribers
// // @desc    Get creator's subscribers
// // @access  Private (Creator only)
// router.get('/subscribers', protect, async (req, res) => {
//   try {
//     if (req.user.role !== 'creator') {
//       return res.status(403).json({ message: 'Access denied' });
//     }

//     const subscribers = await Subscription.find({
//       creator_id: req.user._id,
//       payment_status: 'active',
//       end_date: { $gt: new Date() }
//     })
//       .populate('user_id', 'name email')
//       .sort({ createdAt: -1 });

//     res.json({
//       count: subscribers.length,
//       subscribers
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// // @route   GET /api/payment/check-subscription/:creatorId
// // @desc    Check if user is subscribed to creator
// // @access  Private
// router.get('/check-subscription/:creatorId', protect, async (req, res) => {
//   try {
//     const subscription = await Subscription.findOne({
//       user_id: req.user._id,
//       creator_id: req.params.creatorId,
//       payment_status: 'active',
//       end_date: { $gt: new Date() }
//     });

//     res.json({
//       isSubscribed: !!subscription,
//       subscription
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// @route   POST /api/payment/create-order
// @desc    Create mock payment order (No Razorpay needed)
// @access  Private
router.post('/create-order', protect, async (req, res) => {
  try {
    const [creatorId] = await User.find({ username: req.body.username })
    const creator_id = creatorId._id ;

    const {  amount } = req.body;

    if (!creator_id || !amount) {
      return res.status(400).json({ message: 'Please provide creator_id and amount' });
    }

    // Check if creator exists
    const creator = await User.findById(creator_id);
    if (!creator || creator.role !== 'creator') {
      return res.status(404).json({ message: 'Creator not found' });
    }

    // Check if already subscribed
    const existingSubscription = await Subscription.findOne({
      user_id: req.user._id,
      creator_id,
      plan : "paid",
      payment_status: 'active',
      end_date: { $gt: new Date() }
    });

    if (existingSubscription) {
      return res.status(400).json({ message: 'Already subscribed to this creator' });
    }

    // Create mock order ID
    const mockOrderId = `order_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    res.json({
      order_id: mockOrderId,
      amount: amount,
      currency: 'INR',
      creator_id: creator_id,
      isMockPayment: true
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/create-order/free', protect, async (req, res) => {
  try {
     const [creatorId] = await User.find({ username: req.body.username })
    const creator_id = creatorId._id ;
    //const { creator_id} = req.body;

    if (!creator_id) {
      return res.status(400).json({ message: 'Please provide creator_id and amount' });
    }

    // Check if creator exists
    const creator = await User.findById(creator_id);
    if (!creator || creator.role !== 'creator') {
      return res.status(404).json({ message: 'Creator not found' });
    }

    // Check if already subscribed
    const existingSubscription = await Subscription.findOne({
      user_id: req.user._id,
      creator_id,

      payment_status: 'active',
      end_date: { $gt: new Date() }
    });

    if (existingSubscription) {
      return res.status(400).json({ message: 'Already subscribed to this creator' });
    }

    // Create mock order ID
    const mockOrderId = `order_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    res.json({
      order_id: mockOrderId,
      creator_id: creator_id,
      isMockPayment: true
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// @route   POST /api/payment/verify
// @desc    Mock payment verification (Always succeeds)
// @access  Private
router.post('/verify', protect, async (req, res) => {
  try {
    const { order_id, creator_id, amount , tim } = req.body;

    if (!order_id || !creator_id || !amount) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create subscription (payment always succeeds in mock mode)
    const endDate = new Date();
    let p = "free";
    if (tim === "m"){
    endDate.setMonth(endDate.getMonth() + 1);
    p="monthly";

  }else{
    endDate.setMonth(endDate.getMonth() + 12);
    p="yearly"
  } // 1 month subscription

    const mockPaymentId = `pay_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    const subscription = await Subscription.create({
      user_id: req.user._id,
      creator_id,
      payment_status: 'active',
      plan : 'paid',
      tim: p,
      razorpay_order_id: order_id,
      razorpay_payment_id: mockPaymentId,
      amount: amount,
      start_date: new Date(),
      end_date: endDate
    });

    const newuser = await User.findOneAndUpdate(
  { _id: creator_id },
  { $inc: { subscriberCount: 1 }},
  { new: true }
  
);

    res.json({
      message: 'Payment verified successfully (Mock Payment)',
      subscription
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/free/verify', protect, async (req, res) => {
  try {
    // const [creatorId] = await User.find({ username: req.body.username })
    // const creator_id = creatorId._id ;
    const { order_id,creator_id,username} = req.body;

    if (!order_id || !creator_id) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create subscription (payment always succeeds in mock mode)
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1200); // 1 month subscription

    const mockPaymentId = `pay_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    const subscription = await Subscription.create({
      user_id: req.user._id,
      creator_id: creator_id ,
      payment_status: "active",
      
      amount: 0,
      start_date: new Date(),
      end_date: endDate
    });

    const newuser = await User.findOneAndUpdate(
  { username: username },
  { $inc: { subscriberCount: 1 }},
  { new: true }
  
);


    res.json({
      message: 'Payment verified successfully (Mock Payment)',
      subscription
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/payment/subscriptions
// @desc    Get user's subscriptions
// @access  Private
router.get('/subscriptions', protect, async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ user_id: req.user._id })
      .populate('creator_id', '_id name username email profilePic')
      .sort({ createdAt: -1 });
 
       const formatted = subscriptions.map(c => ({
            id: c.creator_id._id,
            creatorName: c.creator_id.name,
            creatorUsername: c.creator_id.username,
            plan: c.tim,
            price: c.amount,
            renewalDate: c.end_date.toLocaleDateString("en-GB"),
            status: c.payment_status,
            profilePic : c.creator_id.profilePic
        }));
    res.json(formatted)
 
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
router.get('/subscriptions/profile', protect, async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ user_id: req.user._id })
      .populate('creator_id', '_id name username email profilePic')
      .sort({ createdAt: -1 });
 
       const formatted = subscriptions.map(c => ({
            id: c.creator_id._id,
            name: c.creator_id.name,
            username: c.creator_id.username,
            profilePic: c.creator_id.profilePic,
            allowed:false

           
        }));
    res.json(formatted)
 
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/payment/subscribers
// @desc    Get creator's subscribers
// @access  Private (Creator only)
router.get('/subscribers', protect, async (req, res) => {
  try {
    if (req.user.role !== 'creator') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const subscribers = await Subscription.find({
      creator_id: req.user._id,
      payment_status: 'active',
      end_date: { $gt: new Date() }
    })
      .populate('user_id', 'name email')
      .sort({ createdAt: -1 });

    res.json({
      count: subscribers.length,
      subscribers
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/payment/check-subscription/:creatorId
// @desc    Check if user is subscribed to creator
// @access  Private
router.get('/check-subscription/:username', protect, async (req, res) => {
  try {
    const creatorId = await User.findOne({username: req.params.username}).select("_id")
    const subscription = await Subscription.findOne({
      user_id: req.user._id,
      creator_id: creatorId,
      payment_status: 'active',
      end_date: { $gt: new Date() }
    });

    res.json({
      isSubscribed: !!subscription,
      subscription
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


router.delete('/unsubscribe/:id', protect, async (req, res) => {
  try {
    const deletedPost = await Subscription.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const newuser = await User.findOneAndUpdate(
      { _id: deletedPost.creator_id },
      { $inc: { subscriberCount: -1 }},
      { new: true }
      
    );
     res.json({ message: 'Post deleted successfully' });
  
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;