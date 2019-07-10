// 数据库model文件
const mongoose = require("mongoose");

const userSchemal = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:Number,
    required:true
  },
  roles:{
    type:Number,
    default:1
  },
  nickname:{
    type:String,
    required:true
  },
  avatar:{
    type:String,
    default:"http://139.199.12.71:9090/avatar.jpg",
  }
})

module.exports=mongoose.model("user",userSchemal);
