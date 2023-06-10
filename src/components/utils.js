function renderLoading(isLoading, formElement) {
  const button = formElement.querySelector('.form__button');
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}

export { renderLoading }