document.querySelector('form').addEventListener('submit', getFlights);

async function getFlights(event) {
  event.preventDefault();
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
  try {
    document.getElementById(
      'appendHere'
    ).innerHTML = `<img src="https://image.shutterstock.com/image-vector/airplane-icon-white-on-light-260nw-691819741.jpg">`;
    const res = await fetch(
      `http://localhost:3000/flights?from=${from}&to=${to}`
    );
    const res2 = await res.json();
    console.log(res2);
    displayFlights(res2);
  } catch (err) {
    console.log(err);
  }
}

function displayFlights(data) {
  document.getElementById('appendHere').innerText = '';

  data.map((ele) => {
    let div = document.createElement('div');
    div.id = 'flight-card';
    div.innerHTML = `<div><p class="time">${ele.time}</p>
        <p>${ele.from} - ${ele.to}</p>
        <div class="logo-text"><img class="flight-logo" src="${ele.logoURL}" ><p>${ele.airlines}</p></div>
        </div>
        <div><p>${ele.duration}H</p></div>
        <div class="price-div"><h2>RS ${ele.price}</h2>
        <p>One way per traveller</p>
    </div>`;
    div.addEventListener('click', () => {
      modalOpen(ele);
    });
    document.getElementById('appendHere').append(div);
  });
}
const modalOpen = (ele) => {
  if (document.getElementById('modal') != null) {
    closeModal();
  }
  let div = document.createElement('div');
  div.id = 'modal';
  div.innerHTML = `<div id="modal">
    <div id="closeBtn"><button id="close" onclick=closeModal()><i  class="fa-solid fa-x"></i></button></div>
    <div id="fromTo">
      <h2>${ele.from} to ${ele.to}</h2>
      <p><img class="flight-logo"src="${ele.logoURL}"/> <span>${ele.airlines}-${ele.date}</span></p>
    </div>
    <div id="time">
      <p>${ele.time}</p>
      <p>${ele.duration}</p>
    </div>
    <div>
      <h3 id="heading3">Selected fare to ${ele.to}</h3>
      <div id="priceDiv">
        <h2>Rs ${ele.price}</h2>
        <p>${ele.price} one way for 1 traveller</p>
        <button onclick="checkout()" id="selectBtn">Select</button>
      </div>
      
    </div>
  </div>`;
  document.querySelector('body').append(div);
};

function closeModal() {
  document.getElementById('modal').remove();
}
