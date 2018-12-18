const mongoose=require('mongoose');
let Schema=mongoose.Schema;
let goodsSchema=new Schema({
	offprice:{type:Number,required:true},
 	goodsname:{type:String,required:true},
 	url:{type:String,required:true},
 	title:{type:String,required:true},
 	price:{type:String,required:true} 
})

// var Blog = mongoose.model('Blog',blogSchema);
let goods=mongoose.model('goods',goodsSchema);

module.exports=goods
