// model is a data base schema
// we create a schema particularly for users database

import mongoose from 'mongoose';

const userSchema= mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    about: {type: String},
    // [String] indicates array because we may have many tags
    tags: {type: [String]},
    joinedOn: {type: Date, default: Date.now},
})

// name of model is "User"
export default mongoose.model("User", userSchema);