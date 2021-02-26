let items = []
function activity(){
    
 list = document.getElementById('act1').value
 items.push(list)
 console.log(items)
 let s=""
    for(x of  items)
    {
        s+=`<li>${x}</li>`
    }
    document.getElementById("mylist").innerHTML=s
 
}



