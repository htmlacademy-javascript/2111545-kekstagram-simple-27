import {isEscape} from './util.js';
const body = document.body;
// Кнопка для загрузки фото
const filePhoto = document.querySelector('#upload-file');
// Форма для добавления фото
const editorForm = document.querySelector('.img-upload__overlay');
// Кнопка для закрытия формы
const buttonCloseEditor = document.querySelector('.img-upload__cancel');

// Обработчик закрытия модального окна при нажатии Esc
const onEditorEscKeydown = (evt) => {
  if(isEscape(evt)) {
    evt.preventDefault();
    closeEditor();
  }
};

function closeEditor() {
  editorForm.classList.add('hidden');
  body.classList.remove('modal-open');

  // Удаление обработчиков
  document.removeEventListener('keydown', onEditorEscKeydown);

  filePhoto.value = '';
}

// Обработчик открытия окна по нажатию на кнопку "Загрузить"
const openEditor = () => filePhoto.addEventListener('change', () => {
  editorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEditorEscKeydown);
});

// Обработчик закрытия модального окна по нажатию на крестик
buttonCloseEditor.addEventListener('click', closeEditor);

export {openEditor};
