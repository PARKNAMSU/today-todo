const { Schema, Model, model } = require('mongoose');

const curr = new Date();
const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
const KR_TIME_DIFF = 9 * 60 * 60 * 2000;
const kr_curr = new Date(utc + KR_TIME_DIFF);
console.log(kr_curr);
const UserSchema = new Schema({
    email: { type: String },
    password: { type: String },
    name: { type: String },
    create_date: { type: Date, default: kr_curr },
});

UserSchema.statics.create = function (data) {
    data.create_date = kr_curr;
    const user = new this(data);
    return user.save();
};

module.exports = model('User', UserSchema);
