export const navbar = () => `

<div id="navbar">
       
 <div>
  <img src="https://www.expedia.com/_dms/header/logo.svg" alt=""> 
</div>
  <div class="drp-dwn">


   <div class="dropdown">
      <button onclick="myFunction()" class="dropbtn"> More Travel <i class="fa-solid fa-angle-down"></i>

      </button>
      
      <div id="myDropdown" class="dropdown-content">
          <a  href="#"><box-icon name='buildings' animation='burst' color='#7f7b7c' ></box-icon> &nbsp; Stays</a>
          <a  href="#"><box-icon name='plane-alt' type='solid' animation='burst' color='#7f7b7c' ></box-icon> &nbsp;  Flight</a>
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
    <div id="middle"><i class="fa-solid fa-magnifying-glass"></i></div>
    <div class="tab-nav-bag"><box-icon name='shopping-bag' type='solid' animation='tada' ></box-icon></div>
    <div class="desktop-nav">
      <a href="#"> English</a>
      <a href="#">Support</a>
      <a href="#">Trips</a>
    </div>
      <div class="static">
      <a href="#"><box-icon name='bell-ring' type='solid' animation='tada' ></box-icon></a>
      <a  class="acc" href="./SignIn/index.html"><i class="fa-solid fa-user fa-lg"></i></a>
  </div>
</div>

</div>
<hr class="line">
`




 