var passIn=document.querySelector("#passwrd");
var seePass=document.querySelector("#seen");
seePass.addEventListener("click",function(){
    var type=passIn.getAttribute("type")
    if(type==="password"){
        type="text";
    }
    else{
        type="password"
    }
 
   console.log(type)
    passIn.setAttribute("type",type)
   this.classList.toggle("fa-eye-slash")
    // console.log("I'm in")

})

var arrow=document.querySelector("#arrow").addEventListener("click",function(){
    window.history.back();
})

// SAVING USER DETAIL///////////////////

var signUp_data=document.querySelector("form");
var inpt=document.querySelectorAll(".error")


var signUpData=JSON.parse(localStorage.getItem("SignUpData"))||[]
signUp_data.addEventListener("submit",function(){
event.preventDefault();
var SupData={
    email:signUp_data.email.value,
    Fname:signUp_data.Fname.value,
    Sname:signUp_data.Sname.value,
    passwrd:signUp_data.passwrd.value,
}
signUpData.push(SupData)
if(SupData.email===""||SupData.Fname===""||SupData.Sname===""||SupData.passwrd===""){
 var p= document.querySelector("#alert")
 p.innerText="Please Fill All The Information !";
 

 inpt.forEach(function(inpt){
    inpt.style.borderColor="red";
    inpt.style.borderWidth="2px"
 })
 
 
}
else{
localStorage.setItem("SignUpData",JSON.stringify(signUpData))
var p= document.querySelector("#alert")
p.innerText="";


 inpt.forEach(function(inpt){
    inpt.style.borderColor="unset";
    inpt.style.borderWidth="1px"
 })
 alert("Sign Up Successful !")
 window.location.href="login.html"
// console.log(signUpData)
}
})