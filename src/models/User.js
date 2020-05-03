const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
   },
   password: {
    type: String,
    select: false
   },
   passwordResetToken: {
       type: String,
       select: false
   },
   passwordResetExpires: {
       type: Date,
       select: false
   }

});


module.exports = mongoose.model('User', UserSchema);


