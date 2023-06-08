import './pages/index.css';
import { keyHandler, clickOnOverlayHandler } from './components/utils.js';
import { enableValidation } from './components/validate.js';
import { openPopup, closePopup } from './components/modal.js';

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'form__error_active'
});