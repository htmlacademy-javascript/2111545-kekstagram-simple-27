import { isEscape, showErrorMessage, showSuccessMessage } from './util.js';
import { resetScale } from './photo-scale.js';
import { resetEffects } from './photo-effect.js';
import { sendData } from './api.js';

const body = document.body;
// Кнопка для загрузки фото
const buttonUploadPhoto = document.querySelector('#upload-file');
// Форма для добавления фото
const editorForm = document.querySelector('.img-upload__overlay');
// Кнопка для закрытия формы
const buttonCloseEditor = document.querySelector('.img-upload__cancel');
// Кнопка публикации фото
const buttonSendPhoto = document.querySelector('.img-upload__submit');
// Форма загрузки фото
const uploadForm = document.querySelector('.img-upload__form');

// Обработчик закрытия модального окна при нажатии Esc
const onEditorEscKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeEditor();
  }
};

function closeEditor() {
  editorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  resetEffects();

  // Удаление обработчиков
  document.removeEventListener('keydown', onEditorEscKeydown);

  buttonUploadPhoto.value = '';
}

// Обработчик открытия окна по нажатию на кнопку "Загрузить"
const openEditor = () => buttonUploadPhoto.addEventListener('change', () => {
  // Сброс масштаба
  resetScale();
  editorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEditorEscKeydown);
});

// Обработчик закрытия модального окна по нажатию на крестик
buttonCloseEditor.addEventListener('click', closeEditor);

const blockSubmitButton = () => {
  buttonSendPhoto.disabled = true;
  buttonSendPhoto.textContent = 'Публикую фото...';
};

const unBlockSubmitButton = () => {
  buttonSendPhoto.disabled = false;
  buttonSendPhoto.textContent = 'Опубликовать';
};

// Обработчик отправки данных на сервер
const onSendButtonSubmit = (evt) => {
  evt.preventDefault();
  if (uploadForm.checkValidity()) {
    blockSubmitButton();
    sendData(
      () => {
        closeEditor();
        unBlockSubmitButton();
        showSuccessMessage('Фото успешно опубликовано!');
        uploadForm.reset();
      },

      () => {
        showErrorMessage('Не удалось опубликовать фото. Попробуйте ещё раз или перезагрузите страницу.');
        unBlockSubmitButton();
      },
      new FormData(evt.target),
    );
  }
};

// Отправка данных на сервер
const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', onSendButtonSubmit);
};

export { openEditor, setUserFormSubmit };
