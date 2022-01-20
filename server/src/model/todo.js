const { Schema, Model, model } = require('mongoose');

const TodoSchema = new Schema({
    title: { type: String },
    content: { type: String },
    user_email: { type: String },
    time: { type: String },
    date: { type: Date },
    create_date: { type: Date, default: Date.now },
});

module.exports = model('Todo', TodoSchema);
