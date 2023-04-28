// const profile = document.querySelector('.profile');
// const profileEditButton = profile.querySelector('.profile__edit-button');
// let profileName = profile.querySelector('.profile__name');
// let profileDescription = profile.querySelector('.profile__description');
// const popup = document.querySelector('.popup');
// const formElement = document.querySelector('.form');
// let formItems = formElement.querySelectorAll('.form__item');
// const nameInput = formItems[0];
// const jobInput = formItems[1];

// function openProfile() {
// profileEditButton.addEventListener('click', function() {
//   popup.classList.add('popup_opened');
//   formElement.classList.remove('hidden');
//   nameInput.value = profileName.innerHTML;
//   jobInput.value = profileDescription.innerHTML;
// });
// }

// function handleFormSubmit(evt) {
//   evt.preventDefault(); 
//   profileName.textContent = nameInput.value;
//   profileDescription.textContent = jobInput.value;
//   popupClose();
//   return;
// }