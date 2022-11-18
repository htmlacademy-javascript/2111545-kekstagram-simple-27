// Эффекты
const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];

// Модальное окно
const form = document.querySelector('.img-upload__form');
// Превью изображения
const preview = document.querySelector('.img-upload__preview img');

// Слайдер
const sliderElement = document.querySelector('.effect-level__slider');
// Значение слайдера
const effectLevel = document.querySelector('.effect-level__value');

let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

// Обновление слайдера при изменении эффекта
const updateSlider = () => {
  sliderElement.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

// Применение эффекта
const onFormChange = (evt) => {
  if(!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

// Обработчик движения слайдера
const onSliderUpdate = () => {
  preview.style.filter = 'none';
  preview.className = '';
  effectLevel.value = '';

  if(isDefault()) {
    return;
  }

  const sliderValue = sliderElement.noUiSlider.get();
  preview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  preview.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

// Сброс эффектов
const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

// Создание слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

resetEffects();

form.addEventListener('change', onFormChange);

sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
