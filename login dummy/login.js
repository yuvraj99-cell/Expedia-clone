async function validate() {
  const details = {
    email: document.getElementById('email').value,
    password: document.getElementById('pwrd').value,
  };
  let body = JSON.stringify(details);
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
