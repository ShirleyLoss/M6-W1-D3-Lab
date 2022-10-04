const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    id: Number,
    title: Number,
    author: String
});

module.exports = mongoose.model('Book', BookSchema);

