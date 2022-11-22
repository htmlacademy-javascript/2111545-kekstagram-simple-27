import { getData } from './api.js';
import { showErrorMessage } from './util.js';

const renderPhotos = (description) => {
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const photosListSection = document.querySelector('.pictures');
  const photosListFragment = document.createDocumentFragment();

  description.forEach(({url, comments, likes}) => {
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
