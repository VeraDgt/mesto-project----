import { popupImage, addCard, createCard   } from './card.js';

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const popupEditProfile = document.querySelector('#popup_edit-profile');
const formEditProfile = document.forms.profile;
const nameInput = formEditProfile.name;
const jobInput = formEditProfile.description;
const buttonsClosePopups = document.querySelectorAll('.popup__toggle');
const popupAddCard = document.querySelector('#popup_add-card');
const avatarEditButton = profile.querySelector('.profile__avatar-edit-button');
const popupEditAvatar = document.querySelector('#popup_edit-avatar');
const formEditAvatar = document.forms.avatar;
const newAvatar = formEditAvatar.avatar;
const profileAvatar = profile.querySelector('.profile__avatar');
const cardAddForm = document.forms.place;
const newPlaceTitle = cardAddForm.title;
const newPlaceImage = cardAddForm.link;

formEditAvatar.addEventListener('submit', handleEditAvatarFormSubmit);

avatarEditButton.addEventListener('click', function() {
  openPopup(popupEditAvatar);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
};
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

buttonsClosePopups.forEach((item) => {
  item.addEventListener('click', function(evt) { 
    const popup = evt.target.closest('.popup');
    closePopup(popup);
    popupImage.querySelector('.popup__image').removeAttribute("src");
  });
});

profileEditButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});

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

function setSubmitButtonState(isValid, submitButton) {
  if (isValid) {
    submitButton.disabled = false;
    submitButton.classList.remove('form__button_disabled'); 
    } else {
    submitButton.disabled = true;
    submitButton.classList.add('form__button_disabled'); 
  };
};

const cardAddButton = profile.querySelector('.profile__add-button');

cardAddForm.addEventListener('submit', handleAddCardFormSubmit);

cardAddButton.addEventListener('click', function() {
  openPopup(popupAddCard);
});

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

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);

function handleEditProfileFormSubmit(evt) {
  const button = evt.target.querySelector('.form__button');
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
  evt.target.reset();
  setSubmitButtonState(false, button);
};

export { openPopup, closePopup };
