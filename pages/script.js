const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');
const popup = document.querySelector('.popup');
const popupToggle = popup.querySelector('.popup__toggle');

const editForm = document.querySelector('.form-edit');
let formItems = editForm.querySelectorAll('.form__item');

const nameInput = formItems[0];
const jobInput = formItems[1];

function editFormOpen() {
  nameInput.value = profileName.innerHTML;
  jobInput.value = profileDescription.innerHTML;
  popup.classList.add('popup_opened');
  editForm.classList.remove('hidden');
  addForm.classList.add('hidden');
  imgOpened.classList.add('hidden');
}

profileEditButton.addEventListener('click',editFormOpen);

// закрытие попапа
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
}

editForm.addEventListener('submit', handleFormSubmit);

// добавление карточки
const cardsContainer = document.querySelector('.cards__container');
const addButton = profile.querySelector('.profile__add-button');
const addForm = document.querySelector('.form-add');


const listItem = document.createElement('li');
listItem.classList.add('card');
const img = document.createElement('img');
img.classList.add('card__image');
// img.src = cardImage.value;
const cardTitleContainer = document.createElement('div');
cardTitleContainer.classList.add('card__name');
const cardTitle = document.createElement('h2');
cardTitle.classList.add('card__title');
// cardTitle.textContent = cardName.value;
const likeButton = document.createElement('button');
likeButton.classList.add('button');
likeButton.classList.add('card__heart-icon');
// likeButton.type.add('button');

// const imageElement = cardsContainer.createElement('img');
// const textItem = cardsContainer.createTextNode('Hello, world');


addButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
  editForm.classList.add('hidden');
  imgOpened.classList.add('hidden');
  addForm.classList.remove('hidden');
});

// просмотр картинки

const cardImages = cardsContainer.querySelector('.card__image');
console.log(cardImages);

let imgOpened = document.querySelector('.popup__image-wrapper');


cardImages.addEventListener('click', function() {
  popup.classList.add('popup_opened');
  editForm.classList.add('hidden');
  addForm.classList.add('hidden');
  imgOpened.classList.remove('hidden');
});

// cardsContainer.addEventListener('click', showImage);

//загрузка карточек

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

const initialCardsArray = Object.entries(initialCards);

// initialCardsArray.forEach(([key, value]) => {
//   console.log(key); // 'one'
//   console.log(value); 1
// });

// первоначальная загрузка карточек

//   initialCardsArray.forEach(([link, value]) => {
//   cardsContainer.insertAdjacentHTML('beforeend', `
//   <li class="card">
//   <img class="card__image" src="${initialCards[i]link}">
//   <div class="card__name">
//     <h2 class="card__title">${initialCards[i]name}</h2>
//     <button type="button" class="button card__heart-icon card__heart-icon_checked"></button>
//   </div>
// </li>`
//   )
// });

// addInitialCards(initialCards);