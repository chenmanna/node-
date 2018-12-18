 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;//获得schema对象，固定写法
 // 实例化schema对象
 let userSchema=new Schema({
 	name:{type:String,required:true},
 	pass:{type:String,required:true}
 })
 
 let username=mongoose.model('usernames',userSchema);

module.exports=username
//抛出数据模型