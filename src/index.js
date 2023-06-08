import './pages/index.css';
import { enableValidation } from './components/validate.js';
import { openPopup, closePopup,clickOnOverlayHandler } from './components/modal.js';
import { addCard, createCard } from './components/card.js';
import { profileEditButton, profileName, profileDescription, popupEditProfile, nameInput, jobInput, popupAddCard, avatarEditButton, popupEditAvatar, newAvatar, profileAvatar, newPlaceTitle, newPlaceImage, formEditAvatar, cardAddForm, cardAddButton, formEditProfile, popupList } from './components/constants.js'


popupList.forEach ((item) => {
  item.addEventListener('click', clickOnOverlayHandler);
});

formEditAvatar.addEventListener('submit', handleEditAvatarFormSubmit);

avatarEditButton.addEventListener('click', function() {
  openPopup(popupEditAvatar);
});

profileEditButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});

function handleEditAvatarFormSubmit(evt) {
  evt.preventDefault(); 
  const newAvatarLink = newAvatar.value;
  profileAvatar.style.backgroundImage = `url(${newAvatarLink})`;
  closePopup(popupEditAvatar);
  evt.target.reset();
  };

cardAddForm.addEventListener('submit', handleAddCardFormSubmit);

cardAddButton.addEventListener('click', function() {
  openPopup(popupAddCard);
});

function handleAddCardFormSubmit(evt) {
  evt.preventDefault(); 
  const newPlaceImageValue = newPlaceImage.value;
  const newPlaceTitleValue = newPlaceTitle.value;
  const newCard = createCard(newPlaceImageValue, newPlaceTitleValue);
  addCard(newCard);
  closePopup(popupAddCard);
  evt.target.reset();
};

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
  evt.target.reset();
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'form__error_active'
});