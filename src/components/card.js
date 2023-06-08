import { openPopup } from './modal.js';
import { initialCards } from './constants.js';
import { popupImage, cardsContainer, cardTemplate, popupImageImg, popupImageCaption } from './constants.js'

console.log(initialCards);

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
    newCard.remove();
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

initialCards.forEach(function (el) {
  el.newCard = createCard(el.link, el.name);
  addCard(el.newCard);
});

export { addCard, createCard, popupImage };