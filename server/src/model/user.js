const { Schema, Model, model } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String },
    password: { type: String },
    name: { type: String },
    create_date: { type: Date, default: Date.now },
});

UserSchema.statics.create = function (data) {
    const user = new this(data);
    return user.save();
};

module.exports = model('User', UserSchema);
