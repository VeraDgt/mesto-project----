const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
const popupImage = document.querySelector('#popup_image');
const avatarEditButton = profile.querySelector('.profile__avatar-edit-button');
const popupEditAvatar = document.querySelector('#popup_edit-avatar');
const formEditProfile = document.forms.profile;
const formEditAvatar = document.forms.avatar;
const cardAddForm = document.forms.place;

const nameInput = formEditProfile.name;
const jobInput = formEditProfile.description;
const newPlaceTitle = cardAddForm.title;
const newPlaceImage = cardAddForm.link;
const newAvatar = formEditAvatar.avatarLink;

function openPopup(popup) {
  popup.classList.add('popup_opened');

};

profileEditButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

const buttonsClosePopups = document.querySelectorAll('.popup__toggle');

buttonsClosePopups.forEach((item) => {
  item.addEventListener('click', function(evt) { 
    const popup = evt.target.closest('.popup');
    closePopup(popup);
    popupImage.querySelector('.popup__image').removeAttribute("src");
  });
});

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);

// обработка submit
function handleEditProfileFormSubmit(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
  evt.target.reset();
  setSubmitButtonState(false);
  };

// добавление карточки
const cardsContainer = document.querySelector('.cards__container');
const cardAddButton = profile.querySelector('.profile__add-button');

const cardTemplate = cardsContainer.querySelector('#card').content;
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageCaption = popupImage.querySelector('.popup__image-caption');

cardAddForm.addEventListener('submit', handleAddCardFormSubmit);

cardAddButton.addEventListener('click', function() {
  openPopup(popupAddCard);
});


function createCard(link, name) {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  cardImage.src = link;
  cardImage.alt = `Вид на ${name}.`
  cardTitle.textContent = name;
  newCard.querySelector('.card__heart-icon').addEventListener('click', function(evt) {
  evt.target.classList.toggle('card__heart-icon_checked');
});
newCard.querySelector('.card__delete-button').addEventListener('click', function(evt) {
  evt.target.parentElement.remove();
});
newCard.querySelector('.card__image').addEventListener('click', function() {
  popupImageImg.src = link;
  popupImageImg.alt = `Вид на ${name}.`;
  popupImageCaption.textContent = name;
  openPopup(popupImage);
});
  return newCard;
};

function addCard(newCard) {
  cardsContainer.prepend(newCard);
};

function handleAddCardFormSubmit(evt) {
  evt.preventDefault(); 
  const newPlaceImageValue = newPlaceImage.value;
  const newPlaceTitleValue = newPlaceTitle.value;
  const newCard = createCard(newPlaceImageValue, newPlaceTitleValue);
  addCard(newCard);
  closePopup(popupAddCard);
  evt.target.reset();
  setSubmitButtonState(false);
  };

//загрузка карточек

initialCards.forEach(function (el) {
  el.newCard = createCard(el.link, el.name);
  addCard(el.newCard);
});

//смена аватара
const profileAvatar = profile.querySelector('.profile__avatar');
console.log(profileAvatar.style.backgroundImage);


avatarEditButton.addEventListener('click', function() {
  openPopup(popupEditAvatar);
});

formEditAvatar.addEventListener('submit', handleEditAvatarFormSubmit);

function handleEditAvatarFormSubmit(evt) {
  evt.preventDefault(); 
  const newAvatarLink = newAvatar.value;
  profileAvatar.style.backgroundImage = `url(${newAvatarLink})`;
  closePopup(popupEditAvatar);
  evt.target.reset();
  setSubmitButtonState(false);
  };

function keyHandler(evt) {
  if (evt.key == 'Escape') {
    closePopup(popupEditProfile);
    closePopup(popupAddCard);
    closePopup(popupImage);
    closePopup(popupEditAvatar);
    } 
    // if (evt.target.classList.contains('form__item')) {
    //   errorHandler;
    // };
};

function clickOnOverlayHandler(evt) {
  if (evt.target.classList.contains('form') || evt.target.closest('.form')) {
    evt.stopImmediatePropagation();
  }
  else if (evt.target.closest('.popup_opened')) {
    closePopup(popupEditProfile);
    closePopup(popupAddCard);
    closePopup(popupImage);
    closePopup(popupEditAvatar);
  }
}

document.addEventListener('keydown', keyHandler);
document.addEventListener('click', clickOnOverlayHandler);

//валидация форм

formEditProfile.addEventListener('input', errorHandler);
cardAddForm.addEventListener('input', errorHandler);
formEditAvatar.addEventListener('input', errorHandler);

function setSubmitButtonState(isFormValid) {
  if (isFormValid) {submitButton.removeAttribute('disabled');
  submitButton.classList.remove('form__button_disabled'); 
  } else {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('form__button_disabled'); 
  }
}

function errorHandler(evt) {
  const isValid = 40 > nameInput.value.length > 0 && 200 > jobInput.value.length > 0 || 30 > newPlaceTitle.value.length > 0;
  const item = evt.target;
  const submitButton = Array
    .from(item.closest('.form__input-container').children)
    .filter(item => item.classList.contains('form__button'));
  const error = Array
  .from(item.closest('.form__input-container').children)
  .filter(item => item.classList.contains('form__error'));
  const valueLength = item.value.length;
  const itemName = item.name;
  const value = item.value;
//*** */
  //console.log(value.match(/^[a-zA-Zа-яА-я -]+$/i));
//*** */

  //console.log(evt.target.value.length);
  //console.log(evt.target.value);
  // console.log(evt.target.name);
  // console.log(evt.key);
  // console.log(error[0].classList);

  if (valueLength <= 1) {
    const textContent = 'Вы пропустили это поле.';
    if (itemName == 'name') {
      item.classList.add('form__item_error');
      error[0].classList.add('form__error_active');
      error[0].textContent = textContent;
    } if (itemName == 'user-description') {
      item.classList.add('form__item_error')
      error[1].classList.add('form__error_active');
      error[1].textContent = textContent;
    } if (itemName == 'card-title' && valueLength == 1) {
      item.classList.add('form__item_error')
      error[0].classList.add('form__error_active');
      error[0].textContent = textContent;
    }
    } 
  //   else if (valueLength > 30) {
  //   const textContent = 'Превышено допустимое количество символов.';
  //   if (itemName == 'card-title') {
  //     error[0].classList.add('form__error_active');
  //     error[0].textContent = textContent;
  //   } if (itemName == 'user-name' && valueLength > 40) {
  //     error[0].classList.add('form__error_active');
  //     error[0].textContent = textContent;
  //   } if (itemName == 'user-description' && valueLength > 200)
  //   error[1].classList.add('form__error_active');
  //   error[1].textContent = textContent;
  // } else if (valueLength < 3) {
  //   const textContent = 'Минимальное количество символов: 2. Длина текста сейчас: 1 символ.';
  //   if (itemName == 'user-name') {
  //     error[0].classList.add('form__error_active');
  //     error[0].textContent = textContent;
  //   } if (itemName == 'user-description') {
  //     error[1].classList.add('form__error_active');
  //     error[1].textContent = textContent;
  //   } if (itemName == 'card-title' && valueLength == 1) {
  //     error[0].classList.add('form__error_active');
  //     error[0].textContent = textContent; 
  //   }
  //   }
  // else if (value.match(/^[a-zA-Zа-яА-я -]+$/i) && itemName == 'card-title' || itemName == 'user-description' || itemName == 'user-name') {
  //   const textContent = 'Введен некорректный символ.';
  // }
  
  // else {/[\s+,!?]/g
  //   error[0].classList.remove('form__error_active');
  //   error[0].textContent = '';
  //   error[1].classList.remove('form__error_active');
  //   error[1].textContent = '';
  // }


// if (evt.target.length == 1) {
//     error.textContent = 'Минимальное количество символов: 2. Длина текста сейчас: 1 символ.';
//     error.classList.add('form__error_active');
    setSubmitButtonState(isValid);
  }
