const mongoose=require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const db=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology:true})
        console.log('DB connected')
    }catch(error){
        console.log('DB Connection Error');
        console.log(error);
    }
}

module.exports={db}
