let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');
let popup = document.querySelector('.popup');
let popupToggle = popup.querySelector('.popup__toggle');

const formElement = document.querySelector('.form');
let formItems = formElement.querySelectorAll('.form__item');
const nameInput = formItems[0];
const jobInput = formItems[1];

profileEditButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
});

function popupClose() {
  popup.classList.remove('popup_opened');
}

popupToggle.addEventListener('click', popupClose);

nameInput.value = profileName.innerHTML;
jobInput.value = profileDescription.innerHTML;

// редактирование профиля

function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', handleFormSubmit);

//карточки

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// let cardsContainer = document.querySelector('.cards__container');
// let addButton = profile.querySelector('.profile__add-button');

// function addCard() {
//   let cardImage = "";
//   let cardTitle = "";

//   cardsContainer.insertAdjacentHTML('beforeend', `
//   <li class="card">
//   <img class="card__image" src="images/karachaevsk.jpg">
//   <div class="card__name">
//     <h2 class="card__title">${cardTitle.value}</h2>
//     <button type="button" class="button card__heart-icon card__heart-icon_checked"></button>
//   </div>
// </li>
//   `);

// }

// addButton.addEventListener('click', function() {
//   popup.classList.add('popup_opened');
// });

// console.dir(addButton);