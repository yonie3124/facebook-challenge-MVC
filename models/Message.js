const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Schema = mongoose.Schema

const messageSchema = new Schema ({
    name :{
        type: String,
        required: true,
        maxLength: 15,
    },
    created_at:{
        type:Date,
        default: Date.now()
    },
    message :{
        type: String,
        required: true,
        maxLength: 40
    },
})

const Message = mongoose.model('FEED', messageSchema)


module.exports = {
    Message
}
