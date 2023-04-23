import "@babel/polyfill";
import { login, logout } from "./login";
import { signup, urlshorten } from "./signupshorten";

const loginForm = document.querySelector(".form--login");
const signupForm = document.querySelector(".form--signup");
const logOutBtn = document.querySelector(".nav__el--logout");
const urlshortenBtn = document.querySelector(".form--urlshorten");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;
    signup(name, email, password, passwordConfirm);
  });
}

if (logOutBtn) logOutBtn.addEventListener("click", logout);

if (urlshortenBtn)
  urlshortenBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = document.getElementById("originalURL").value;
    urlshorten(url);
  });
