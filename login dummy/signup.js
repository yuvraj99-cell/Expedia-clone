document.querySelector('form').addEventListener('submit', addUser);

async function addUser(event) {
  event.preventDefault();

  let user = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('pwrd').value,
    number: document.getElementById('number').value,
  };
  let body = JSON.stringify(user);
  console.log(body);
  try {
    const requestOptions = {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'application/json' },
    };
    await fetch(`http://localhost:3000/userData`, requestOptions);
  } catch (err) {
    console.log(err);
  }
}
