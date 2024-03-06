const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({

 productName:{type:String,
       required:true},
 productPrice:{type:Number,
         required:true},
 userEmail:{type:String,
         required:true},
 pUrl:{type:String,
      required:true}
})
const Product=mongoose.model('products',productSchema)
module.exports=Product;