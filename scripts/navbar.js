export const navbar = () => `
<div id="navbar">
       
<div>
 <a href="./index.html"><img src="https://www.expedia.com/_dms/header/logo.svg" alt=""></a> 
</div>
 <div class="drp-dwn">


  <div class="dropdown">
     <button onclick="myFunction()" class="dropbtn"> More Travel <i class="fa-solid fa-angle-down"></i>

     </button>
     
     <div id="myDropdown" class="dropdown-content">
         <a  href="./hotel.html"><box-icon name='buildings' animation='burst' color='#7f7b7c' ></box-icon> &nbsp; Stays</a>
         <a  href="./flights.html"><box-icon name='plane-alt' type='solid' animation='burst' color='#7f7b7c' ></box-icon> &nbsp;  Flight</a>
         <a  href="./car.html"><box-icon name='car' animation='burst' color='#7f7b7c' ></box-icon> &nbsp; Car</a>
         <a  href="#"> <box-icon name='briefcase-alt' type='solid' flip='horizontal' animation='tada' color='#7f7b7c' ></box-icon> &nbsp; Packages</a>
         <a  href="#"><box-icon name='collection' animation='burst' color='#7f7b7c' ></box-icon>&nbsp; Holiday Activites</a>
         <a  href="#">Deals</a>
         <a  href="#">Group & meetings</a>
         <a  href="#">Mobile</a>
     </div>
   

 

 
</div>
 </div>
 <div id="right">
   <div  class="acc" id="middle"><i class="fa-solid fa-bars"></i></div>
   
   <div class="desktop-nav">
   <div id="translate"> 
  
      
   </div>
     <a href="#">Support</a>
     <a href="#">Trips</a>
   </div>
     <div class="static">
     <a class="acc" href="#"><i class="fa-solid fa-bell"></i></a>
     <a class="acc" onclick="openModal()"><i class="fa-solid fa-circle-user"></i></a>

 </div>
</div>
<div id="modal-box">

<div id="acDetails">
    <h3 id="userName">Hi, FAIZAN</h3>
    <p id="userEmail">faizan@gmail.com</p>
    <p id="blueMember">Blue Member</p>

</div>
<hr>
<div id="signout"><button id="signOutBtn">Sign Out</button></div>
</div>

</div>
<hr class="line">

`;
