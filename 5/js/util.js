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

export {getRandomIntNumber, checkStringMaxLength};
