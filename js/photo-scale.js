// Кнопки масштабирования
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');

// Вывод масштаба
const scaleInput = document.querySelector('.scale__control--value');

// Превью изображения в модальном окне
const imagePreview = document.querySelector('.img-upload__preview img');

// Шаг масштабирования
const STEP = 25;

const MAX_SCALE = 100;
const MIN_SCALE = 25;
const DEFAULT_SCALE = 100;

// Масштабирование фото и вывод масштаба
const scaleImage = (value = DEFAULT_SCALE) => {
  scaleInput.value = `${value}%`;
  imagePreview.style.transform = `scale(${value / 100})`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - STEP;
  if(newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBiggerButtonCkick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + STEP;
  if(newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

// Сброс масштабирования
const resetScale = () => {
  scaleImage();
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonCkick);

export { resetScale };
