const ALERT_SHOW_TIME = 10000;

const showErrorMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '10';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '5px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';

  alertContainer.style.backgroundColor = '#f8d7da';
  alertContainer.style.color = '#88353d';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showSuccessMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '5px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';

  alertContainer.style.backgroundColor = '#d4edda';
  alertContainer.style.color = '#155724';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscape = (evt) => evt.key === 'Escape';

export { isEscape, showErrorMessage, showSuccessMessage };
