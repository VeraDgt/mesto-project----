const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');
const popup = document.querySelector('.popup');
const popupToggle = popup.querySelector('.popup__toggle');

const formEdit = document.querySelector('.form-edit');
let formItems = formEdit.querySelectorAll('.form__item');

const nameInput = formItems[0];
const jobInput = formItems[1];

function openFormEdit() {
  nameInput.value = profileName.innerHTML;
  jobInput.value = profileDescription.innerHTML;
  popup.classList.add('popup_opened');
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
  formEdit.classList.remove('hidden');
  cardAddForm.classList.add('hidden');
  imgOpened.classList.add('hidden');
}

profileEditButton.addEventListener('click',openFormEdit);

// закрытие попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}

popupToggle.addEventListener('click', closePopup);

formEdit.addEventListener('submit', handleFormSubmit);

// добавление карточки
const cardsContainer = document.querySelector('.cards__container');
const cardAddButton = profile.querySelector('.profile__add-button');
const cardAddForm = document.querySelector('.form-add');
let cadAddFormItems = cardAddForm.querySelectorAll('.form__item');

const newPlaceTitle = cadAddFormItems[0];
const newPlaceImage = cadAddFormItems[1];

cardAddForm.addEventListener('submit', handleFormSubmit);

cardAddButton.addEventListener('click', function() {
  newPlaceTitle.value = '';
  newPlaceImage.value = '';
  popup.classList.add('popup_opened');
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
  formEdit.classList.add('hidden');
  imgOpened.classList.add('hidden');
  cardAddForm.classList.remove('hidden');
});

// обработка submit
function handleFormSubmit(evt) {
  evt.preventDefault(); 
  if (formEdit.classList.contains('hidden') == false)   {
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup();} 
    else if (cardAddForm.classList.contains('hidden') == false) {
      newPlaceImageValue = newPlaceImage.value;
      newPlaceTitleValue = newPlaceTitle.value;
      addCard(newPlaceImageValue, newPlaceTitleValue);
    closePopup();
  }
}

function addCard(newPlaceImageValue, newPlaceTitleValue) {
  const cardTemplate = cardsContainer.querySelector('#card').content;
const newCard = cardTemplate.querySelector('.card').cloneNode(true);
newCard.querySelector('.card__image').src = newPlaceImageValue;
    newCard.querySelector('.card__title').textContent = newPlaceTitleValue;
    cardsContainer.prepend(newCard);
}

// просмотр картинки

const currentCardImage = cardsContainer.querySelector('.card__image');
const currentCardTitle = cardsContainer.querySelector('.card__title');
// image = currentCardImage.currentSrc;
// title = currentCardTitle.innerHTML;


const imgOpened = document.querySelector('.popup__image-wrapper');
let popupImage = imgOpened.querySelector('popup__image');
let popupImageCaption = imgOpened.querySelector('popup__image-caption');

currentCardImage.addEventListener('click',
function () {
  // popupImage.src = currentCardImage.closest('.card__image').src;
  // popupImageCaption.innerHTML = currentCardTitle.closest('.card__name').innerHTML;
  popup.classList.add('popup_opened');
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; 
  formEdit.classList.add('hidden');
  cardAddForm.classList.add('hidden');
  imgOpened.classList.remove('hidden');
});

//удаление карточки
const deleteCardButtons = cardsContainer.querySelectorAll('.card__delete-button');

// deleteCardButtons.addEventListener('click', function() {
//   const cardsToDelete = cardsContainer.querySelectorAll('.card');
//   cardToDelete =
//   deleteCardButtons.closest(cardsToDelete);
//   cardToDelete.remove();
// });

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


