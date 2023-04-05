import { location } from './location';

const btnToggleTemp = document.querySelector('.toggle');
const forecastContainer = document.querySelector('.forecast__container');

const toggleTemp = function (e) {
  e.currentTarget.attributes.temp.value === 'celsius'
    ? (e.currentTarget.attributes.temp.value = 'fahrenheit')
    : (e.currentTarget.attributes.temp.value = 'celsius');

  const celsius = document.querySelector('.toggle-celsius');
  celsius.classList.toggle('active');
  const fahrenheit = document.querySelector('.toggle-fahrenheit');
  fahrenheit.classList.toggle('active');
  updateDom();
};

const appendHourlyForecast = function (hour) {
  const currentHour = hour[0].slice(11, 13);

  const hourlyContainer = document.createElement('div');
  hourlyContainer.classList.add(`forecast-hour--${currentHour}`);

  const timeDisplay = document.createElement('h4');
  timeDisplay.textContent = currentHour;

  hourlyContainer.appendChild(timeDisplay);

  const condition = document.createElement('img');
  condition.alt = hour[1];
  condition.src = hour[2];
  condition.classList.add('hourly-condition');

  hourlyContainer.appendChild(condition);

  const currentTemp = document.createElement('p');
  currentTemp.classList.add('hourly-temp');
  currentTemp.textContent =
    btnToggleTemp.attributes.temp.value === 'celsius'
      ? `${hour[3]}`
      : `${hour[4]}`;

  hourlyContainer.appendChild(currentTemp);

  forecastContainer.appendChild(hourlyContainer);
};

export default function updateDom() {
  btnToggleTemp.addEventListener('click', toggleTemp);
  forecastContainer.innerHTML = '';

  const titleName = document.querySelector('.title__main');
  titleName.textContent = `${location.name}, ${location.country}`;

  const titleDate = document.querySelector('.title__sub');
  titleDate.textContent = Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(location.localTime));

  const mainImgContainer = document.querySelector('.content__main--img');
  const img = document.createElement('img');
  img.alt = location.condition;
  img.src = location.conditionImg;
  if (mainImgContainer.firstChild)
    mainImgContainer.removeChild(mainImgContainer.firstChild);
  mainImgContainer.appendChild(img);

  const mainCondition = document.querySelector('.content__main--condition');
  mainCondition.textContent = `${location.condition}, ${
    btnToggleTemp.attributes.temp.value === 'celsius'
      ? `${location.tempC}°C`
      : `${location.tempF}°F`
  }`;

  const mainFeelsLike = document.querySelector('.content__main--feel');
  mainFeelsLike.textContent = `Feels like: ${
    btnToggleTemp.attributes.temp.value === 'celsius'
      ? `${location.feelsLikeC}°C`
      : `${location.feelsLikeF}°F`
  }`;

  const mainHighTemp = document.querySelector('.content__main--high');
  mainHighTemp.textContent = `H: ${
    btnToggleTemp.attributes.temp.value === 'celsius'
      ? `${location.maxTempC}°C`
      : `${location.maxTempF}°F`
  }`;

  const mainLowTemp = document.querySelector('.content__main--low');
  mainLowTemp.textContent = `L: ${
    btnToggleTemp.attributes.temp.value === 'celsius'
      ? `${location.minTempC}°C`
      : `${location.minTempF}°F`
  }`;

  const wind = document.querySelector('.content__wind--sub');
  wind.textContent =
    btnToggleTemp.attributes.temp.value === 'celsius'
      ? `${location.windSpeedKPH}kmph`
      : `${location.windSpeedMPH}mph`;

  const windArrow = document.querySelector('.content__wind--arrow');
  windArrow.setAttribute(
    'style',
    `transform: rotate(${location.windDegree}deg);`
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

  location.hourly.forEach(hour => appendHourlyForecast(hour));
  //hourly forecast
  console.log(location);
}
