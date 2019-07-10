// 用户相关的控制器代码

const UserModel = require("../models/user");
const fs = require("fs");
const path = require("path");

/***
 * 修改用户头像
 */

 const postUpdAvatar = (req,res) => {
  //  1.得到用户传递过来的文件，并做到移动到public目录下操作
  // 1.1设置文件的名字+ req.file.originalname
  let newFileName = new Date().getTime() +""+ req.file.originalname;
  // console.log(newFileName);
  // 1.2设置文件移动的路径
  let newPath = path.resolve(__dirname,"../public/",newFileName);
  // 1.3读文件
  let fileData = fs.readFileSync(req.file.path);
  // console.log(req.file.path);
  // 1.4写文件
  fs.writeFileSync(newPath,fileData);
  console.log(newPath,fileData)

  // 2.将数据库中当前用户的头像更新
  // 2.1 得到用户id
  let userId = req.body.userId;

  let newAvatar = `http://localhost/${ newFileName }`;
  // 2.2更新数据库
  UserModel.update({
    _id:userId
  },{
    avatar:newAvatar
  }
  ).then( data =>{
      if(data.nModified > 0){
        res.send({
          code:0,
          msg:"更新头像成功",
          data:newAvatar
        });
      }else{
        res.send({
          code:0,
          msg:"更新头像失败"
        })
      }
  } ).catch( error => {
    res.send({
      code:-1,
      msg:error.meassag
    });
  });
 };


/***
 * 注册
 */
const postSignup = (req,res) => {
  // 1.检验参数信息
  // 2.创建用户
  const user = new UserModel(req.body);
  user.save().then( () => {
    res.send({
      code:0,
      msg:"添加成功"
    });
  }).catch( error => {
    res.send({
      code:-1,
      msg:error.message
    });
  });
}

/***
 * 登录
 */
const postSignin = (req,res) => {
  // 1.检验用户信息
  // 2.查找是否有这个人
  UserModel.findOne(req.body)
            .then(data => {
              if(data){
                res.send({
                  code:0,
                  mag:"ok",
                  data:{
                    userId:data._id,
                    nickname:data.nickname,
                    avatar:data.avatar
                  }
                });
              }else{
                res.send.send({
                  code:-1,
                  msg:"用户名或密码错误"
                });
              }
            }).catch( error =>{
              res.send({
                code:-2,
                msg:error.meassag
              })
            })
}

module.exports ={
  postUpdAvatar,
  postSignup,
  postSignin,
}
