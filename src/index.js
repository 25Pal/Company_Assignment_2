const express=require('express');
const mongoose = require('mongoose')
const route = require('./routes/route')

const app = express();

mongoose.set('strictQuery', true);

app.use(express.json())
//http data in packets => for wrapping it we use urlleancoded
mongoose.connect('mongodb+srv://Pal25:Pallavi2552@cluster0.hihf8kq.mongodb.net/Crypto',{useNewUrlParser :true})
.then(function(){
    console.log("Database Connected...")
})
.catch(err => console.log(err))
app.use('/',route);

app.listen(3000,function() {
    console.log("express is running on port 3000")
}
)
