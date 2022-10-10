const mongoose = require('mongoose')

const PostModel = new mongoose.Schema({
    title: {
        type:String,
        required: false
    },
    text: {
        type:String,
        required: true,
        unique: true
    },
    tags:{
        type:Array,
        default: [],
    },
    viewsCount:{
        type:Number,
        default: 0,

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    imageUrl:String,
    },
    {
        timestamps:true,
    })
    
    module.exports = mongoose.model('Post', PostModel)

