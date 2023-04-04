import { location } from './location';

const btnToggleTemp = document.querySelector('.toggle');

const toggleTemp = function (e) {
  e.currentTarget.attributes.temp.value === 'celsius'
    ? (e.currentTarget.textContent = 'Fahrenheit')
    : (e.currentTarget.textContent = 'Celsius');
  e.currentTarget.attributes.temp.value === 'celsius'
    ? (e.currentTarget.attributes.temp.value = 'fahrenheit')
    : (e.currentTarget.attributes.temp.value = 'celsius');
  updateDom();
};

export default function updateDom() {
  btnToggleTemp.addEventListener('click', toggleTemp);

  const titleName = document.querySelector('.title__main');
  titleName.textContent = `${location.name}, ${location.country}`;

  const titleDate = document.querySelector('.title__sub');
  titleDate.textContent = Intl.DateTimeFormat('en-US', {
    timeZoneName: 'short',
    hour: 'numeric',
    minute: 'numeric',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(location.localTime));

  const wind = document.querySelector('.content__wind--sub');
  wind.textContent =
    btnToggleTemp.attributes.temp.value === 'celsius'
      ? `${location.windSpeedKPH}kmph`
      : `${location.windSpeedMPH}mph`;

  const windArrow = document.querySelector('.content__wind--arrow');
  windArrow.setAttribute(
    'style',
    `transform: translate(-50%, -20%) rotate(${location.windDegree}deg);`
  );

  const humidity = document.querySelector('.content__humidity--sub');
  humidity.textContent = `${location.humidity}%`;

  const uv = document.querySelector('.content__uv--sub');
  uv.textContent = location.uv;

  const visibility = document.querySelector('.content__visibility--sub');
  visibility.textContent =
    btnToggleTemp.attributes.temp.value === 'celsius'
      ? `${location.visibilityKM}km`
      : `${location.visibilityMiles}mi`;

  const cloudiness = document.querySelector('.content__cloudiness--sub');
  cloudiness.textContent = `${location.cloud}%`;

  const rain = document.querySelector('.content__rain--sub');
  rain.textContent = `${location.chanceOfRain}%`;

  const sunrise = document.querySelector('.content__sunrise--sub');
  sunrise.textContent = location.sunrise;

  const sunset = document.querySelector('.content__sunset--sub');
  sunset.textContent = location.sunset;

  const moon = document.querySelector('.content__moon--sub');
  moon.textContent = location.moon;

  console.log(location);
}
