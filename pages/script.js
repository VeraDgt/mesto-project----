// editProfile();

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');
const popup = document.querySelector('.popup');
const popupToggle = popup.querySelector('.popup__toggle');

const formElement = document.querySelector('.form');
let formItems = formElement.querySelectorAll('.form__item');
let formHeading = formElement.querySelector('.form__heading');
const nameInput = formItems[0];
const jobInput = formItems[1];
const cardName = formItems[2];
const cardImage = formItems[3];



function popupClose() {
  popup.classList.remove('popup_opened');
}

popupToggle.addEventListener('click', popupClose);





// редактирование профиля

function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupClose();
  return;

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

// первоначальная загрузка карточек
const cardsContainer = document.querySelector('.cards__container');

function addInitialCards() {
for (let i = 0; i <= initialCards.length; i++) {
  console.log(initialCards[i]);
//   cardsContainer.insertAdjacentHTML('beforeend', `
//   <li class="card">
//   <img class="card__image" src="${initialCards[i].link}">
//   <div class="card__name">
//     <h2 class="card__title">${initialCards[i].name}</h2>
//     <button type="button" class="button card__heart-icon card__heart-icon_checked"></button>
//   </div>
// </li>
//   `);
}
};

addInitialCards(initialCards);

// добавление карточки
const addButton = profile.querySelector('.profile__add-button');

const listItem = document.createElement('li');
listItem.classList.add('card');
const img = document.createElement('img');
img.classList.add('card__image');
img.src = cardImage.value;
const cardTitleContainer = document.createElement('div');
cardTitleContainer.classList.add('card__name');
const cardTitle = document.createElement('h2');
cardTitle.classList.add('card__title');
cardTitle.textContent = cardName.value;
const likeButton = document.createElement('button');
likeButton.classList.add('button');
likeButton.classList.add('card__heart-icon');
// likeButton.type.add('button');

// const imageElement = cardsContainer.createElement('img');
// const textItem = cardsContainer.createTextNode('Hello, world');


addButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
  formElement.classList.remove('hidden');
  formHeading.innerHTML = 'Новое место';
  nameInput.classList.add('hidden');
  jobInput.classList.add('hidden');
  cardTitle.classList.remove('hidden');
  cardImage.classList.remove('hidden');
  return;
});

// просмотр картинки

const cardImages = cardsContainer.querySelectorAll('.card__image');
const cardImgLink = this.currentSrc;


function showImage() {
  formElement.classList.add('hidden');
}
console.log(cardImgLink);

cardsContainer.addEventListener('click', showImage());

// console.dir(addButton);