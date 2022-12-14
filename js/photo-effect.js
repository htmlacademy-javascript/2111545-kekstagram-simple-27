const EFFECTS = {
  none: { min: 0, max: 100, step: 1, },
  chrome: { style: 'grayscale', min: 0, max: 1, step: 0.1, unit: '', },
  sepia: { style: 'sepia', min: 0, max: 1, step: 0.1, unit: '', },
  marvin: { style: 'invert', min: 0, max: 100, step: 1, unit: '%', },
  phobos: { style: 'blur', min: 0, max: 3, step: 0.1, unit: 'px', },
  heat: { style: 'brightness', min: 1, max: 3, step: 0.1, unit: '', },
};

const DEFAULT_EFFECT = EFFECTS['none'];

const form = document.querySelector('.img-upload__form');
const preview = document.querySelector('.img-upload__preview img');

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

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

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS[evt.target.value];
  updateSlider();
};

const onSliderUpdate = () => {
  preview.style.filter = 'none';
  preview.className = '';
  effectLevel.value = '';

  if (isDefault()) {
    return;
  }

  const sliderValue = sliderElement.noUiSlider.get();
  preview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  preview.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

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
