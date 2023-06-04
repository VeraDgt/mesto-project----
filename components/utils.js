import { closePopup } from './modal.js'

const popupList = Array.from(document.querySelectorAll('.popup'));

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
  };
};

document.addEventListener('keydown', keyHandler);
document.addEventListener('click', clickOnOverlayHandler);

export { keyHandler, clickOnOverlayHandler }; 