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
         <a  href="./hotels.html"><box-icon name='buildings' animation='burst' color='#7f7b7c' ></box-icon> &nbsp; Stays</a>
         <a  href="./flights.html"><box-icon name='plane-alt' type='solid' animation='burst' color='#7f7b7c' ></box-icon> &nbsp;  Flight</a>
         <a  href="#"><box-icon name='car' animation='burst' color='#7f7b7c' ></box-icon> &nbsp; Car</a>
         <a  href="#"> <box-icon name='briefcase-alt' type='solid' flip='horizontal' animation='tada' color='#7f7b7c' ></box-icon> &nbsp; Packages</a>
         <a  href="#"><box-icon name='collection' animation='burst' color='#7f7b7c' ></box-icon>&nbsp; Holiday Activites</a>
         <a  href="#">Deals</a>
         <a  href="#">Group & meetings</a>
         <a  href="#">Mobile</a>
     </div>
   

 

 
</div>
 </div>
 <div id="right">
   <div id="middle"><box-icon name='search' animation='tada' color='#131413' ></box-icon></div>
   <div class="tab-nav-bag"><box-icon name='shopping-bag' type='solid' animation='tada' ></box-icon></div>
   <div class="desktop-nav">
     <a href="#"> English</a>
     <a href="#">Support</a>
     <a href="#">Trips</a>
   </div>
     <div class="static">
     <a href="#"><box-icon name='bell-ring' type='solid' animation='tada' ></box-icon></a>
     <a  class="acc" href="./signUp.html"><box-icon name='user' animation='flashing' color='#131413' ></box-icon></a>
 </div>
</div>

</div>
<hr class="line">

`;

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
