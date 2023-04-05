import './sass/style.scss';
import { updateLocation } from './modules/location';
import updateDom from './modules/dom';

const init = async function () {
  const main = document.querySelector('main');
  const loading = document.querySelector('.loading');

  loading.removeAttribute('style');
  main.style.visibility = 'hidden';

  await updateLocation('dublin');

  loading.style.display = 'none';
  main.removeAttribute('style');

  updateDom();
};
init();

document.querySelector('button').addEventListener('click', async e => {
  e.preventDefault();
  const searchValue = document.querySelector('input').value;

  const loading = document.querySelector('.loading');

  loading.removeAttribute('style');

  await updateLocation(searchValue);

  loading.style.display = 'none';
});
