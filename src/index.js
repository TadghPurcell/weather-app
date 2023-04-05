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

document.querySelector('body').addEventListener('click', function () {
  const searchInput = document.querySelector('input');
  searchInput.value = '';

  searchInput.textContent = '';
});
document.querySelector('.btn-search').addEventListener('click', async e => {
  e.preventDefault();
  const searchInput = document.querySelector('input');

  const loading = document.querySelector('.loading');

  loading.removeAttribute('style');

  await updateLocation(searchInput.value);
  searchInput.value = '';
  searchInput.textContent = '';

  loading.style.display = 'none';
});
