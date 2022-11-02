import {isEscape} from './util.js';
const body = document.body;
// Блок загрузки фото
const uploadForm = document.querySelector('.img-upload__form');
// Кнопка для загрузки фото
const filePhoto = document.querySelector('#upload-file');
// Форма для добавления фото
const editorForm = document.querySelector('.img-upload__overlay');
// Кнопка для закрытия формы
const buttonCloseEditor = document.querySelector('.img-upload__cancel');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',

  // Для добавления класса невалидной форме
  //errorTextClass: 'setup-wizard-form__error-text',
});

// Обработчик закрытия модального окна при нажатии Esc
const onEditorEscKeydown = () => document.addEventListener('keydown', (evt) => {
  if(isEscape(evt)) {
    evt.preventDefault();
    closeEditor();
  }
});

// Обработчик закрытия модального окна по нажатию на крестик
const onEditorClick = () => buttonCloseEditor.addEventListener('click', () => {
  closeEditor();
});

function closeEditor() {
  editorForm.classList.add('hidden');
  body.classList.remove('modal-open');

  // Удаление обработчиков
  document.removeEventListener('keydown', onEditorEscKeydown);
  document.removeEventListener('click', onEditorClick);

  filePhoto.value = '';
}

// Обработчик открытия окна по нажатию на кнопку "Загрузить"
const openEditor = () => filePhoto.addEventListener('change', () => {
  editorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEditorEscKeydown);
  document.addEventListener('click', onEditorClick);
});

export {openEditor};
