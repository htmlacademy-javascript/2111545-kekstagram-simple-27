import { isEscape, showErrorMessage, showSuccessMessage } from './util.js';
import { resetScale } from './photo-scale.js';
import { resetEffects } from './photo-effect.js';
import { sendData } from './api.js';

const body = document.body;
const buttonUploadPhoto = document.querySelector('#upload-file');
const editorForm = document.querySelector('.img-upload__overlay');
const buttonCloseEditor = document.querySelector('.img-upload__cancel');
const buttonSendPhoto = document.querySelector('.img-upload__submit');
const uploadForm = document.querySelector('.img-upload__form');

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

  document.removeEventListener('keydown', onEditorEscKeydown);

  uploadForm.reset();
  buttonUploadPhoto.value = '';
}

const openEditor = () => buttonUploadPhoto.addEventListener('change', () => {
  resetScale();
  editorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEditorEscKeydown);
});

buttonCloseEditor.addEventListener('click', closeEditor);

const blockSubmitButton = (value) => {
  if (value) {
    buttonSendPhoto.disabled = true;
    buttonSendPhoto.textContent = 'Публикую фото...';
  }
  else {
    buttonSendPhoto.disabled = false;
    buttonSendPhoto.textContent = 'Опубликовать';
  }
};

const onSendButtonSubmit = (evt) => {
  evt.preventDefault();
  if (uploadForm.checkValidity()) {
    blockSubmitButton(true);
    sendData(
      () => {
        closeEditor();
        blockSubmitButton(false);
        showSuccessMessage('Фото успешно опубликовано!');
        uploadForm.reset();
      },

      () => {
        showErrorMessage('Не удалось опубликовать фото. Попробуйте ещё раз или перезагрузите страницу.');
        blockSubmitButton(false);
      },
      new FormData(evt.target),
    );
  }
};

const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', onSendButtonSubmit);
};

export { openEditor, setUserFormSubmit };
