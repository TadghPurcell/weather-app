import './style.scss';

const getCurrentWeather = async function (city) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=8b62768b3aa44848bb8113142230304&q=${city}`
  );
  const weather = await promise.json();
  console.log(weather);
  // name/country
  console.log(weather.location.name);
  console.log(weather.location.country);
  // date/time
  console.log(weather.location.localtime);
  console.log(weather.location.localtime_epoch);
  // lat/lon
  console.log(weather.location.lat);
  console.log(weather.location.lon);
  // temp
  console.log(weather.current.temp_c);
  console.log(weather.current.temp_f);
  console.log(weather.current.feelslike_c);
  console.log(weather.current.feelslike_f);
  // conditions
  console.log(weather.current.condition.text);
  console.log(weather.forecast.forecastday[0].day.daily_chance_of_rain);
  console.log(weather.current.cloud);
  // max/min temp
  console.log(weather.forecast.forecastday[0].day.maxtemp_c);
  console.log(weather.forecast.forecastday[0].day.maxtemp_f);
  console.log(weather.forecast.forecastday[0].day.mintemp_c);
  console.log(weather.forecast.forecastday[0].day.mintemp_f);
  // wind speed/direction
  console.log(weather.current.gust_kph);
  console.log(weather.current.gust_mph);
  console.log(weather.current.wind_degree);
  // sunrise/sunset
  console.log(weather.forecast.forecastday[0].astro.sunrise);
  console.log(weather.forecast.forecastday[0].astro.sunset);
  // moon phase
  console.log(weather.forecast.forecastday[0].astro.moon_phase);
  // humidity
  console.log(weather.current.humidity);
  // pressure
  console.log(weather.current.pressure_mb);
  console.log(weather.current.pressure_in);
  // Precipitation
  console.log(weather.current.precip_mm);
  console.log(weather.current.precip_in);
  // UV index
  console.log(weather.current.uv);
  // visibility
  console.log(weather.current.vis_km);
  console.log(weather.current.vis_miles);

  //   console.log(weather.location.name);
  // return {weather.location.name};
};

getCurrentWeather('dublin');

document.querySelector('button').addEventListener('click', e => {
  e.preventDefault();
  const searchValue = document.querySelector('input').value;
  console.log(searchValue);
  console.log(getCurrentWeather(searchValue));
});
