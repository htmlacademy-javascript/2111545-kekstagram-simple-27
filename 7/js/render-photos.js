import { createElement } from './data.js';

const renderPhotos = () => {
  // Шаблон HTML для отрисовки изображения
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

  // Секция в HTML для вставки фотографий из шаблона
  const photosListSection = document.querySelector('.pictures');
  // Создаём фрагмент для вставки элементов
  const photosListFragment = document.createDocumentFragment();

  // Генерация описаний фотографий
  const photos = createElement();

  photos.forEach((photoItem) => {
    // Создаём копию шаблона
    const photo = photoTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = photoItem.url;
    photo.querySelector('.picture__likes').textContent = photoItem.likes;
    photo.querySelector('.picture__comments').textContent = photoItem.comment;

    photosListFragment.appendChild(photo);
  });

  photosListSection.appendChild(photosListFragment);
};

export { renderPhotos };
