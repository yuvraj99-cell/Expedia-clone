var passIn = document.querySelector('#passwrd');
var seePass = document.querySelector('#seen');
seePass.addEventListener('click', function () {
  var type = passIn.getAttribute('type');
  if (type === 'password') {
    type = 'text';
  } else {
    type = 'password';
  }

  console.log(type);
  passIn.setAttribute('type', type);

  this.classList.toggle('fa-eye-slash');
  // console.log("I'm in")
});

var arrow = document
  .querySelector('#arrow')
  .addEventListener('click', function () {
    window.location.href = './index.html';
  });

// LOGIN PRocesss////////

var getUserData = JSON.parse(localStorage.getItem('SignUpData'));
//   console.log(getUserData)

var loginForm = document.querySelector('form');
var inpt = document.querySelectorAll('.error');
var p = document.querySelector('#alert');
var pEml = document.querySelector('#p-email');
var pWrd = document.querySelector('#pss-wrd');
var show_alert = document.querySelector('.show-alert');

loginForm.addEventListener('submit', function () {
  event.preventDefault();
  //    console.log("hello")
  var LoginData = {
    email: loginForm.email.value,

    passwrd: loginForm.passwrd.value,
  };
  // console.log(LoginData)
  if (getUserData == null) {
    alert('User Not Exist !');
  } else {
    if (LoginData.email === '' || LoginData.passwrd === '') {
      p.innerText = 'Please Fill All The Information !';
      show_alert.classList.remove('visible-alert');

      inpt.forEach(function (inpt) {
        inpt.style.borderColor = 'red';
        inpt.style.borderWidth = '2px';
      });
    } else {
      var flag = false;
      var flagpass;
      for (var i = 0; i < getUserData.length; i++) {
        console.log(LoginData.email);
        if (
          LoginData.email === getUserData[i].email &&
          LoginData.passwrd === getUserData[i].passwrd
        ) {
          var user = getUserData[i].Fname;

          localStorage.setItem('Username', JSON.stringify(user));
          localStorage.setItem('loginData', JSON.stringify(getUserData[i]));
          flag = true;
          flagpass = true;
        }
      }
      if (flag !== true && flagpass !== true) {
        show_alert.classList.add('visible-alert');
        // alert("Something went wrong! Incorrect email or password!")
      } else {
        show_alert.classList.remove('visible-alert');
        alert('Login successful !');
        localStorage.setItem('islogged', 1);

        window.location.href = './index.html';
      }
    }
  }
});
