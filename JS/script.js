let i=123;let j="123"
if(i===j){
    console.log("i and j are eqal")
    console.log(i+j)
}
else if(typeof j=="string"){
    let s=parseInt(j)
    console.log(typeof s)
}
else if(typeof i=="nmber"){

    console.log(i**3)
}
else{
    let sum=parseInt(j)+i
    console.log(sum)
}
console.log("after if-else block")
let choice="+"
switch(choice){
    case "+": {console.log(i+j)
        break}
    case "-":{console.log(i-j)
        break}
    default :console.log("invalid operation")

}