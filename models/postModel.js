const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    entry: {
        type: String,
        required: true
    },
    category: {
        type: String,
        $ifNull: ["$category", "general" ]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);
