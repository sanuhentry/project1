/*function change(){
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="block";
   // document.getElementById("div2").style.display="none";
   // document.getElementById("div1").style.display="block";
}*/
function getimage() {

    if (document.getElementById("p2").src == "file:///C:/Users/Febin/Desktop/san/baby1.jpg") 
    {
        document.getElementById("p2").src = "file:///C:/Users/Febin/Desktop/san/baby2.jpg";
    }
    else 
    {
        document.getElementById("p2").src = "file:///C:/Users/Febin/Desktop/san/baby1.jpg";
    }
}