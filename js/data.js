import {getRandomIntNumber, checkStringMaxLength} from './util.js';
// Количество объектов с описанием фотографий
const PHOTO_DESCRIPTION_COUNT = 25;
// Массив, состоящий из объектов, содержащих описание фотографий
const descriptions = [];

const PHOTOS_DESCRIPTIONS = [
  'Питер такой красивый!',
  'На пикнике',
  'Поход в театр',
  'Моё первое блюдо',
  'С Новым Годом!',
  'Ура! Теперь я бакалавр',
  'Прогулка с друзьями'
];

const createDescription = (index) => ({

  // Идентификатор опубликованной фотографии от 1 до 25 (без повторений)
  id: index,

  // Адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25 (без повторений)
  url: `photos/${index}.jpg`,

  // Описание фотографии
  description: PHOTOS_DESCRIPTIONS[getRandomIntNumber(0, PHOTOS_DESCRIPTIONS.length - 1)],

  // Количество лайков (случайное число от 15 до 200)
  likes: getRandomIntNumber(15, 200),

  //  Количество комментариев случайное число от 0 до 200)
  comment: getRandomIntNumber(0, 200)
});

const createElement = () => {
  for (let i = 1; i <= PHOTO_DESCRIPTION_COUNT; i++) {
    descriptions.push(createDescription(i));
  }
};

createElement();
checkStringMaxLength();

// Вывод элементов массива (для проверки работоспособности)
/*for(let i = 0; i < PHOTO_DESCRIPTION_COUNT; i++) {
  console.log(descriptions[i]);
}*/
export {createElement};
