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
function openModal() {
  let flag = localStorage.getItem('islogged');
  if (flag === null) {
    document.getElementById('acDetails').innerHTML =
      '<h3>Please Sign In or Create a New Account</h3>';
    document.getElementById('signOutBtn').innerText = 'Log In';
    document
      .getElementById('signOutBtn')
      .addEventListener('click', function () {
        window.location.href = '../login.html';
      });
  } else {
    console.log('asdad');

    document
      .getElementById('signOutBtn')
      .addEventListener('click', function () {
        localStorage.removeItem('islogged');
        window.location.href = '../index.html';
      });
  }
  if (document.getElementById('modal-box').style.display == 'flex') {
    document.getElementById('modal-box').style.display = 'none';
  } else {
    document.getElementById('modal-box').style.display = 'flex';
  }
}

let flightInfo = JSON.parse(localStorage.getItem('flightInfo'));
append(flightInfo);

function append(ele) {
  let div = `<div id="fromToDiv">
  <p><span>${ele.airlines} -</span>
    <span id="travelingFrom">${ele.from} </span
    ><span><i class="fa-solid fa-arrow-right"></i></span
    ><span id="travellingTo"> ${ele.to}</span>
  </p>
</div>
<div id="box-parent">
  <div id="first">
    <div id="flexible">
      <div>
        <img
          src="https://images.trvl-media.com/media/content/expus/graphics/flights/no_change_fee.svg"
          alt=""
        />
      </div>
      <div>
        <p>Stays flexible with no chanfe fees</p>
        <p>
          We recommend booking a flight with no change fees in case your
          plans change.
        </p>
        <a href="./flights.html">Change Flight</a>
      </div>
    </div>
    <div id="flightInformation">
      <div id="fromTo">
        <h2>${ele.from} to ${ele.to}</h2>
        <p id="logo-text">
          <img class="flight-logo" src="${ele.logoURL}" />
          <span>${ele.airlines}-${ele.date}</span>
        </p>
      </div>
      <div id="time">
        <p>${ele.time}</p>
        <p>${ele.duration} Hours</p>
      </div>
    </div>
  </div>
  <div id="second">
    <div>
      <h2 id="price-summary">Price Summary</h2>
      <p id="traveller">Traveller 1: Adult<span class="float">₹${
        ele.price
      }</span></p>
      <p id="flight">Flight<span class="float">₹${ele.price - 1034}</span></p>
      <p id="taxes">Taxes and fees:<span class="float">₹${1034}</span></p>
    </div>

    <hr />
    <div>
      <h3 id="trip">Trip total<span class="float">₹${ele.price}</span></h3>
      <p id="verySmall">Rates are quoted in Indian rupees</p>
    </div>
    <button id="checkoutBtn">Check Out</button>
  </div>
</div>`;

  document.getElementById('info').innerHTML = div;
  document.getElementById('checkoutBtn').addEventListener('click', function () {
    window.location.href = '../checkout.html';
  });
}
