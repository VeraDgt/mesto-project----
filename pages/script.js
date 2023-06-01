const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
const popupImage = document.querySelector('#popup_image');
const avatarEditButton = profile.querySelector('.profile__avatar-edit-button');
const popupEditAvatar = document.querySelector('#popup_edit-avatar');
const popupList = Array.from(document.querySelectorAll('.popup'));
const formEditProfile = document.forms.profile;
const formEditAvatar = document.forms.avatar;
const cardAddForm = document.forms.place;

const nameInput = formEditProfile.name;
const jobInput = formEditProfile.description;
const newPlaceTitle = cardAddForm.title;
const newPlaceImage = cardAddForm.link;
const newAvatar = formEditAvatar.avatar;


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__error_active');
  inputElement.classList.add('form__item_error');
};

  const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_error');
  errorElement.classList.remove('form__error_active');
  errorElement.textContent = ''; 
  inputElement.classList.remove('form__item_error');
};

const isValid = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
inputElement.setCustomValidity(inputElement.dataset.errorMessage);
} else {
inputElement.setCustomValidity("");
} if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__item'));
  const buttonElement = formElement.querySelector('.form__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
    buttonElement.classList.add('form__button_disabled');
  } else {
        buttonElement.disabled = false;
    buttonElement.classList.remove('form__button_disabled');
  }
}; 

enableValidation();

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

profileEditButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});

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
  const button = evt.target.querySelector('.form__button');
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
  evt.target.reset();
  setSubmitButtonState(false, button);
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
  const button = evt.target.querySelector('.form__button');
  const newPlaceImageValue = newPlaceImage.value;
  const newPlaceTitleValue = newPlaceTitle.value;
  const newCard = createCard(newPlaceImageValue, newPlaceTitleValue);
  addCard(newCard);
  closePopup(popupAddCard);
  evt.target.reset();
  setSubmitButtonState(false, button);
  };

//загрузка карточек

initialCards.forEach(function (el) {
  el.newCard = createCard(el.link, el.name);
  addCard(el.newCard);
});

//смена аватара
const profileAvatar = profile.querySelector('.profile__avatar');

avatarEditButton.addEventListener('click', function() {
  openPopup(popupEditAvatar);
});

formEditAvatar.addEventListener('submit', handleEditAvatarFormSubmit);

function handleEditAvatarFormSubmit(evt) {
  evt.preventDefault(); 
  const button = evt.target.querySelector('.form__button');
  const newAvatarLink = newAvatar.value;
  profileAvatar.style.backgroundImage = `url(${newAvatarLink})`;
  closePopup(popupEditAvatar);
  evt.target.reset();
  evt.target
  setSubmitButtonState(false, button);
  };

function keyHandler(evt) {
  if (evt.key == 'Escape') {
    popupList.forEach((popupElement) => {
      closePopup(popupElement);
    });
  };
};

function clickOnOverlayHandler(evt) {
  if (evt.target.classList.contains('form') || evt.target.closest('.form') || evt.target.closest('.popup__image-wrapper')) {
    evt.stopImmediatePropagation();
  }
  else if (evt.target.closest('.popup_opened')) {
    popupList.forEach((popupElement) => {
      closePopup(popupElement);
    });
  }
}

document.addEventListener('keydown', keyHandler);
document.addEventListener('click', clickOnOverlayHandler);


function setSubmitButtonState(isValid, submitButton) {
  if (isValid) {
    submitButton.disabled = false;
  submitButton.classList.remove('form__button_disabled'); 
  } else {
    submitButton.disabled = true;
    submitButton.classList.add('form__button_disabled'); 
  };
};