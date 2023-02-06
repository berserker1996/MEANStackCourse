const mongoose = require('mongoose')

const shoopingItemSchema = mongoose.Schema({

    itemName: {
        type: String,
        require: true
    },

    itemQuantity: {
        type: Number,
        require: true
    },

    itemBought: {
        type: Boolean,
        require: true
    }
})

const Item = module.exports = mongoose.model('Item', shoopingItemSchema)