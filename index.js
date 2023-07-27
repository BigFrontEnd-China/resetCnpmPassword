//对应cnpm私服秘钥加密依赖包，用来加密password_sha
const utility = require("utility");
// 从mysql数据获取salt
const salt = "d7205d************************************************3efbcb84"; 
// 新密码
const password = "123456";

//使用新密码+salt生成需要初始化的password_sha
let password_sha = utility.sha1(password + salt);

console.log(password_sha);

