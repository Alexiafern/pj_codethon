"use strict"

const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnLogin = document.querySelector('#button');

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  const emailValue = email.value;
  const senhaValue = senha.value;

  if (emailValue.trim() === "" || senhaValue.trim() === "") {
    alert("Preencha todos os campos");
    return;
  }

  fetch('http://localhost:3001/loginUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: emailValue,
      senha: senhaValue
    })
  })
    .then(response => response.json())
    .then(data => {
      window.location.href = "cadastroAdm.html";
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
