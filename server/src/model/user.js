const { Schema, Model, model } = require('mongoose');
const CustomDate = require('../api/method/date');
const UserSchema = new Schema({
    email: { type: String },
    password: { type: String },
    name: { type: String },
    create_date: { type: Date, default: CustomDate.setSeoulTimeZone() },
});

UserSchema.statics.create = function (data) {
    data.create_date = CustomDate.setSeoulTimeZone();
    const user = new this(data);
    return user.save();
};

module.exports = model('User', UserSchema);
