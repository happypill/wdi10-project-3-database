import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    username: String,
    name: String,
    lastName: String,
    password: String,
    email: String,
    profileImg:{data:Buffer,contentType:String}
},{timestamp:true});

const User = mongoose.model('User', userSchema)

module.exports = User;