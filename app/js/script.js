const submitBtn = document.querySelector('.card__submit');
const inputField = document.querySelector('.card__input');
const formElement = document.querySelector('.card__form');

submitBtn.addEventListener('click', (event) => {
   event.preventDefault();
   if (inputField.value === '') {
      formElement.classList.add('active');
   }
   const timer = setInterval(() => {
      formElement.classList.remove('active');
      clearInterval(timer);
   }, 3000);
});

inputField.addEventListener('focus', () => {
   inputField.style.color = 'black';
   inputField.setAttribute('placeholder', '');
});

inputField.addEventListener('focusout', () => {
   inputField.style.color = 'hsl(0, 36%, 70%)';
   inputField.setAttribute('placeholder', 'Email Address');
});