import { getData } from './api.js';
import { showErrorMessage } from './util.js';

const renderPhotos = (description) => {
  // Шаблон HTML для отрисовки изображения
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

  // Секция в HTML для вставки фотографий из шаблона
  const photosListSection = document.querySelector('.pictures');
  // Создаём фрагмент для вставки элементов
  const photosListFragment = document.createDocumentFragment();

  description.forEach(({url, comments, likes}) => {
    // Создаём копию шаблона
    const photo = photoTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = comments;

    photosListFragment.appendChild(photo);
  });

  photosListSection.appendChild(photosListFragment);
};

const drawPhoto = () => {
  getData(renderPhotos, showErrorMessage);
};

export { drawPhoto };
