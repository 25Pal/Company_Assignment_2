const mongoose = require('mongoose')
const crptoSchema= new mongoose.Schema({
    symbol:{
        type:String,
        //unique:true
    },
    name:{
        type:String,
        //unique:true
    },
    marketCapUsd:{
        type:String
    },
    priceUsd:{
        type:String
    }

},{timestamps:true})
module.exports =mongoose.model('crptoData',crptoSchema);

// {  "symbol" // String and Unique
// "name": // String and Unique
// "marketCapUsd": // String  ( not Number)
//  "priceUsd": //String
// }
