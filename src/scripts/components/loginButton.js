import signIn from '../helpers/signIn';
import logo from '../../Images/logo.jpg';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
  <img src=${logo} class="rounded mx-auto d-block" alt="...">
  <div>Welcome to Vocab-You-Lary!</div>
  <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
