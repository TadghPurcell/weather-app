import './style.scss';

const getCurrentWeather = async function (city) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=8b62768b3aa44848bb8113142230304&q=${city}`
  );
  const weather = await promise.json();
  console.log(weather);
};
getCurrentWeather('dublin');

document.querySelector('button').addEventListener('click', e => {
  e.preventDefault();
  const searchValue = document.querySelector('input').value;
  getCurrentWeather(searchValue);
});
