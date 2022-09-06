document.querySelector('form').addEventListener('submit', getFlights);

async function getFlights(event) {
  event.preventDefault();

  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
  try {
    document.getElementById(
      'appendHere'
    ).innerHTML = `<img  src="https://image.shutterstock.com/image-vector/airplane-icon-white-on-light-260nw-691819741.jpg">`;
    const res = await fetch(
      `http://localhost:3000/flights?from=${from}&to=${to}`
    );
    const res2 = await res.json();
    console.log(res2);
    displayFlights(filter(res2));
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
        <p class="fromTo">${ele.from} - ${ele.to}</p>
        <div class="logo-text"><img class="flight-logo" src="${ele.logoURL}" ><p>${ele.airlines}</p></div>
        </div>
        <div class="duration"><p>${ele.duration}H</p></div>
        <div class="price-div"><h2>RS ${ele.price}</h2>
        <p class="smallText">One way per traveller</p>
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
  div.innerHTML = `
    <div id="closeBtn"><button id="close" onclick=closeModal()><i  class="fa-solid fa-x"></i></button></div>
    <div id="fromTo">
      <h2>${ele.from} to ${ele.to}</h2>
      <p><img class="flight-logo"src="${ele.logoURL}"/> <span>${ele.airlines}-${ele.date}</span></p>
    </div>
    <div id="time">
      <p>${ele.time}</p>
      <p>${ele.duration} Hours</p>
    </div>
    <div>
      <h3 id="heading3">Selected fare to ${ele.to}</h3>
      <div id="priceDiv">
        <h2>Rs ${ele.price}</h2>
        <p class="smallText">Rs ${ele.price} one way for 1 traveller</p>
        <button onclick="checkout()" id="selectBtn">Select</button>
      </div>
      
    </div>
  `;
  document.querySelector('body').append(div);
};

function closeModal() {
  document.getElementById('modal').remove();
}

function filter(res) {
  let arr = [];
  let count = 0;
  const chkbox = document.querySelectorAll('.chk');
  const newArr = chkbox.forEach((ele) => {
    ele.addEventListener('click', function () {
      chkbox.forEach((ele) => {
        if (ele.checked) {
          let res3 = res.filter((elem) => {
            return elem.airlines == ele.value;
          });
          arr = [...res3];

          count++;
        }
      });
    });
    if (count === 0) {
      return res;
    } else {
      return arr;
    }
  });

  return newArr;
}
