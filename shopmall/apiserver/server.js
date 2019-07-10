const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const url = "mongodb://localhost:27017/maizuo";
const update = multer({
  dest: "./tmp"
});

const userController = require("./controllers/user");

const server = express();


// 连接mongodb数据库

mongoose.connect(url,{ useNewUrlParser:true })
        .then( () => {
          console.log("数据库链接成功");
        }).catch( error => {
          console.log("数据库链接失败");
        })

server.use(express.json());
server.use(express.urlencoded({ extended:true }));
server.use(express.static("public"));
server.use( (req,res,next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "content-type");
  next();
} )


// 路由的配置

server.post("/sign-up",userController.postSignup);
server.post("/sign-in",userController.postSignin);
server.post("/updat-avatar", update.single("avatar"),
userController.postUpdAvatar);


server.listen(9090);
