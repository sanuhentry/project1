function calculate(a,b,c){
    let result;
    if(c=="+")
    {
       /* console.log("sum is",a+b)*/result=a+b
    }
    else if(c=="-")
    {
       /* console.log("difference is",a-b)*/result=a-b
    }
    else if(c=="*")
    {
        /*console.log("prodct is",a*b)*/result=a*b
    }
    return result
   
}
console.log(calculate(2,5,"+"))
console.log(calculate(2,5,"-"))
console.log(calculate(2,5,"*"))

let add=function(x,y){
    return x+y
}
console.log(add)
let result=add(4,5)
console.log(result)
let i=500
let s="hello"
function outer(){
    let i=100
    console.log("inside outer fnction")
    console.log(i)
    console.log(s)
    function inner(){
        let k=20
        console.log("inside fnction inner")
        console.log(k)
    }
    inner()
}
outer()
console.log(i)