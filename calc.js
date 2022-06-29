 console.log(calc.add(12,23))
 console.log(calc.sub(12,23))
 console.log(calc.mul(12,23))
 calc.div(12,2,(err,result)=>{
     if(err)
         console.log(err)
     else
         console.log(result)
 })
 calc.div(12,0,(err,result)=>{
    if(err)
        console.log(err)
     else
         console.log(result)
 })

var calc=require('./calc')
exports.add=function(a,b){
    return a+b;
}
exports.mul=function(a,b){
    return a*b;
}
exports.sub=function(a,b){
    return a-b;
}
exports.div=function(a,b,callback){
    if(b==0)
        callback("Error division by zero",null);
    else    
        callback(null,a/b);
}