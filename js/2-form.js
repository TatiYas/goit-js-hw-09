const head = document.querySelector('h1');
head.remove();

const section = document.querySelector('section');
section.classList.add('section');
const homeLink = document.querySelector('a');
homeLink.classList.add('to-home-link');

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');
const button = form.querySelector('button');

form.addEventListener('input', handleForm);

function handleForm(event) {
  formData.email = input.value;
  formData.message = textarea.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (input.value === '' || textarea.value === '') {
    alert('Please fill in all the fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
}

const localStorageData = localStorage.getItem('feedback-form-state');
if (localStorageData) {
  const savedData = JSON.parse(localStorageData);
  input.value = savedData.email;
  textarea.value = savedData.message;
  Object.assign(formData, savedData);
}

//   formData.email = event.target.elements.email.value;
//   formData.message = event.target.elements.message.value.trim();
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));

/* --- Google Font --- */

function loadGoogleFonts() {
  const linkGoogle = document.createElement('link');
  linkGoogle.rel = 'preconnect';
  linkGoogle.href = 'https://fonts.googleapis.com';
  document.head.appendChild(linkGoogle);

  const linkGstatic = document.createElement('link');
  linkGstatic.rel = 'preconnect';
  linkGstatic.href = 'https://fonts.gstatic.com';
  linkGstatic.crossOrigin = 'anonymous';
  document.head.appendChild(linkGstatic);

  const linkFont = document.createElement('link');
  linkFont.rel = 'stylesheet';
  linkFont.href =
    'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap';
  document.head.appendChild(linkFont);
}

document.addEventListener('DOMContentLoaded', loadGoogleFonts);