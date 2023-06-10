import './pages/index.css';
import { enableValidation } from './components/validate.js';
import { openPopup, closePopup,clickOnOverlayHandler } from './components/modal.js';
import { renderCards } from './components/card.js';
import { profileEditButton, profileName, profileDescription, popupEditProfile, nameInput, jobInput, popupAddCard, avatarEditButton, popupEditAvatar, newAvatar, profileAvatar, newPlaceTitle, newPlaceImage, formEditAvatar, cardAddForm, cardAddButton, formEditProfile, popupList } from './components/constants.js';
import { getUserData, updateUserData, updateCard } from './components/api.js';
import { renderLoading } from './components/utils.js';

let personId = "";

Promise.all([getUserData()])
.then(([userData]) => {
  profileAvatar.src = userData.avatar;
  profileName.textContent = userData.name;
  profileDescription.textContent = userData.about;
  personId = userData._id;
})
.catch(err => console.log(err));


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
  renderLoading(true, cardAddForm);
  updateCard(newPlaceTitle.value, newPlaceImage.value)
.then(newCard => {
  renderCards([newCard]);
  closePopup(popupAddCard);
  evt.target.reset();
})
.catch(err => console.log(err))
.finally(() => renderLoading(false, cardAddForm));
};

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault(); 
  renderLoading(true, formEditProfile);
  updateUserData(nameInput.value, jobInput.value)
  .then(newData => {
    profileName.textContent = newData.name;
    profileDescription.textContent = newData.about;
    closePopup(popupEditProfile);
    evt.target.reset();
  })
  .catch(err => console.log(err))
  .finally(() => renderLoading(false, formEditProfile));
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'form__error_active'
});

export { personId }