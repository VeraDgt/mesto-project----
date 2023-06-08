const initialCards = [];

// fetch('https://nomoreparties.co/v1/plus-cohort-25/users/me', {
//   headers: {
//     authorization: '93cf6edd-b0e6-426e-82f8-64302cc26990'
//   }
// })
// .then(res => res.json())
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log('Ошибка. Запрос не выполнен: ', err);
//   });

  fetch('https://nomoreparties.co/v1/plus-cohort-25/cards', {
    headers: {
      authorization: '93cf6edd-b0e6-426e-82f8-64302cc26990'
    }
  })
    .then(res => {
      if (res.ok) {
        if (res.headers.get('Content-Type').contains('application/json')) {
        return res.json();
        }
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then((cards) => {
      cards.forEach((card) => {
        initialCards.push(card.link, card.name);
        JSON.stringify(initialCards);
        return initialCards;
      });
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });

  export { initialCards };