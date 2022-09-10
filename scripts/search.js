let c = localStorage.getItem('from') || null;
let d = localStorage.getItem('to') || null;
if (c != null && d != null) {
  getFlights(c, d);
  localStorage.removeItem("from");
  localStorage.removeItem("to");
  document.getElementById('from').value = c;
  document.getElementById('to').value = d;
}
document.querySelector('#searchFlights').addEventListener('click', function () {
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
  getFlights(from, to);
});
let arr = [];
let globalArr = [];
async function getFlights(from, to) {
  document.getElementById('mainContent').style.display = 'flex';
  document.getElementById('bg-img-container2').style.display = 'none';
  document.getElementById('bg-img-container').style.display = 'none';
  // event.preventDefault();

  try {
    document.getElementById(
      'appendHere'
    ).innerHTML = `<img id="waiting-img"  src="https://image.shutterstock.com/image-vector/airplane-icon-white-on-light-260nw-691819741.jpg">`;

    const res = await fetch(
      `http://localhost:3000/flights?from=${from}&to=${to}`
    );

    const res2 = await res.json();
    console.log(res2);
    arr = res2;
    globalArr = res2;

    if (res2.length < 1) {
      document.getElementById(
        'appendHere'
      ).innerHTML = `<img id="waiting-img"  src="https://www.sotc.in/images/flight/noResultFound.jpg">`;
      return;
    }

    setTimeout(() => {
      displayFlights(res2);
    }, 1500);
  } catch (err) {
    console.log(err, 'aasd');
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
        <button id="selectBtn">Select</button>
      </div>
      
    </div>
  `;

  document.querySelector('body').append(div);
  document.getElementById('selectBtn').addEventListener('click', function () {
    localStorage.setItem('flightInfo', JSON.stringify(ele));
    if (localStorage.getItem('islogged') == null) {
      alert('please Sign In First !');
      window.location.href = './login.html';
      return;
    } else {
      window.location.href = './flightInfo.html';
    }
  });
};

function closeModal() {
  document.getElementById('modal').remove();
}
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
        window.location.href = '../flights.html';
      });
  }
  if (document.getElementById('modal-box').style.display == 'flex') {
    document.getElementById('modal-box').style.display = 'none';
  } else {
    document.getElementById('modal-box').style.display = 'flex';
  }
}

document.getElementById('Indigo').addEventListener('click', function () {
  filter(arr);
});
document.getElementById('Vistara').addEventListener('click', function () {
  filter(arr);
});
document.getElementById('Spice Jet').addEventListener('click', function () {
  filter(arr);
});
document.getElementById('Go First').addEventListener('click', function () {
  filter(arr);
});

function filter(data) {
  let mainArr = [];
  if (document.getElementById('Indigo').checked) {
    let newArr = data.filter((el) => {
      return el.airlines == 'Indigo';
    });
    mainArr = mainArr.concat(newArr);
  }
  if (document.getElementById('Vistara').checked) {
    let newArr = data.filter((el) => {
      return el.airlines == 'Vistara';
    });
    mainArr = mainArr.concat(newArr);
  }
  if (document.getElementById('Spice Jet').checked) {
    let newArr = data.filter((el) => {
      return el.airlines == 'Spice Jet';
    });
    mainArr = mainArr.concat(newArr);
  }
  if (document.getElementById('Go First').checked) {
    let newArr = data.filter((el) => {
      return el.airlines == 'Go First';
    });
    mainArr = mainArr.concat(newArr);
  }
  if (
    !document.getElementById('Indigo').checked &&
    !document.getElementById('Go First').checked &&
    !document.getElementById('Spice Jet').checked &&
    !document.getElementById('Vistara').checked
  ) {
    mainArr = [...data];
  }
  globalArr = [...mainArr];
  displayFlights(mainArr);
}
document.getElementById('sortBar').addEventListener('change', function () {
  if (document.getElementById('sortBar').value === 'LH') {
    // console.log('ASDAd');
    // console.log(globalArr);
    globalArr.sort(function (a, b) {
      return a.price - b.price;
    });

    displayFlights(globalArr);
  } else if (document.getElementById('sortBar').value === 'HL') {
    globalArr.sort(function (a, b) {
      return b.price - a.price;
    });
    displayFlights(globalArr);
  } else {
    displayFlights(globalArr);
  }
});
