const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {
        age: { type: Number },
        location: { type: String }
    }
}, { timestamps: true });

// Export the model
const User = mongoose.model('User', userSchema);

module.exports = User;
