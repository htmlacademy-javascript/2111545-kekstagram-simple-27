// Количество объектов с описанием фотографий
const PHOTO_DESCRIPTION_COUNT = 25;
// Массив, состоящий из объектов, содержащих описание фотографий
const descriptions = [];

// Генерация случайного целого числа в диапазоне (min, max)
const getRandomIntNumber = (min = 0, max = 1000) => {
  if (min < 0 || max <= 0 || min === max || min > max) {
    return NaN;
  }

  // Округление дробного числа вверх
  min = Math.ceil(min);
  // Округление дробного числа вниз
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Проверка максимальной длины строки
const checkStringMaxLength = (str = 'Мяу', maxLength = 100) => str.length <= maxLength;

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
