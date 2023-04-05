import './sass/style.scss';
import { updateLocation } from './modules/location';
import updateDom from './modules/dom';

const init = async function () {
  await updateLocation('dublin');
  updateDom();
};
init();

document.querySelector('button').addEventListener('click', async e => {
  e.preventDefault();
  const searchValue = document.querySelector('input').value;

  await updateLocation(searchValue);
  updateDom();
});
