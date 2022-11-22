const URL_GET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const URL_SET = 'https://27.javascript.pages.academy/kekstagram-simple';
const ERROR_MESSAGE = 'Ошибка загрузки данных! Попробуйте обновить страницу';

const getData = (onSuccess, onError) => {
  fetch(URL_GET)
    .then((response) => response.json())

    .then((description) => {
      onSuccess(description);
    })

    .catch(() => {
      onError(ERROR_MESSAGE);
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    URL_SET,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if(response.ok) {
        onSuccess();
      }
      else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export { getData, sendData };
