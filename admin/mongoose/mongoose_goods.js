const mongoose=require('mongoose');
let Schema=mongoose.Schema;
let goodsSchema=new Schema({
	name:{type:String,required:true},
	type:{type:String,required:true},
	desc:{type:String,required:true},
	price:{type:Number,required:true},
	imgpath:{type:String,required:true},
	stock:{type:Number,required:true},
	grounding:{type:Boolean,default:false}
})

// var Blog = mongoose.model('Blog',blogSchema);
let goods=mongoose.model('goods',goodsSchema);

module.exports=goods
