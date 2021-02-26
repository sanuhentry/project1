function validate(){
    let name= docment.getElementsById(username)
   
   if(name.value==""){

    alert("name field cannot be empty")
    name.focus()
    return false
   }
   let email= docment.getElementsById(email)
   
   if(email.value==""){

    alert("email field cannot be empty")
    email.focus()
    return false
   }
   let password= docment.getElementsById(password)
   
   if(password.value==""){

    alert("password field cannot be empty")
    password.focus()
    return false
   }
   let mobile= docment.getElementsById(number)
   
   if(isNaN(mobile.value) ){

    alert("password field cannot be empty")
    mobile.focus()
    return false
   }
}
