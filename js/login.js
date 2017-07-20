// JavaScript Document
function xlogin(){
	var user = document.getElementById("user").value;
	var password = document.getElementById("password").value;
	if( user == "xiaowenyong" && password =="123456"){
		return true ;
		}else{
			alert("用户名或密码错误！");
			return false;
			}
	}