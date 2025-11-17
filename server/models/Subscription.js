const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  payment_status: {
    type: String,
    enum: ['active', 'expired', 'cancelled'],
    default: 'active'
  },
  razorpay_order_id: {
    type: String,
    default: ''
  },
  razorpay_payment_id: {
    type: String,
    default: ''
  },
  amount: {
    type: Number,
    required: true
  },
  start_date: {
    type: Date,
    default: Date.now
  },
  end_date: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add index for faster queries
subscriptionSchema.index({ user_id: 1, creator_id: 1 });

module.exports = mongoose.model('Subscription', subscriptionSchema);