function verifylogin(user,pwd,callback){
    if(pwd=="pwd1")
        callback(null,"You logged in successfully")
    else    
        callback("your login credentials are incorrect",null)
}
verifylogin("kav","pwd2",function(err,res){
    if(err)
        console.log(err)
    else
        console.log(res)
})