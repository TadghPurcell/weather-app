import updateDom from './dom';

const location = {};
const updateLocation = async function (city) {
  const main = document.querySelector('main');
  main.style.visibility = 'hidden';

  const error = document.querySelector('.error');
  error.style.display = 'none';

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=8b62768b3aa44848bb8113142230304&q=${city}`
    );

    if (!response.ok) throw new Error('City not found');

    const weather = await response.json();
    console.log(weather);
    // name/country
    location.name = weather.location.name;
    location.country = weather.location.country;
    // date/time
    location.localTime = weather.location.localtime;
    // lat/lon
    location.lat = weather.location.lat;
    location.lon = weather.location.lon;
    // temp
    location.tempC = weather.current.temp_c;
    location.tempF = weather.current.temp_f;
    location.feelsLikeC = weather.current.feelslike_c;
    location.feelsLikeF = weather.current.temp_f;
    // conditions
    // location.condition = weather.current.condition.icon;
    location.conditionImg = weather.current.condition.icon;
    location.condition = weather.current.condition.text;
    location.chanceOfRain =
      weather.forecast.forecastday[0].day.daily_chance_of_rain;
    location.cloud = weather.current.cloud;
    // max/min temp
    location.maxTempC = weather.forecast.forecastday[0].day.maxtemp_c;
    location.maxTempF = weather.forecast.forecastday[0].day.maxtemp_f;
    location.minTempC = weather.forecast.forecastday[0].day.maxtemp_c;
    location.minTempF = weather.forecast.forecastday[0].day.maxtemp_f;
    // wind speed/direction
    location.windSpeedKPH = weather.current.gust_kph;
    location.windSpeedMPH = weather.current.gust_mph;
    location.windDegree = weather.current.wind_degree;
    // sunrise/sunset
    location.sunrise = weather.forecast.forecastday[0].astro.sunrise;
    location.sunset = weather.forecast.forecastday[0].astro.sunset;
    // moon phase
    location.moon = weather.forecast.forecastday[0].astro.moon_phase;
    // humidity
    location.humidity = weather.current.humidity;
    // pressure
    location.pressureMB = weather.current.pressure_mb;
    location.pressureIN = weather.current.pressure_in;
    // Precipitation
    location.precipitationMM = weather.current.precip_mm;
    location.precipitationIN = weather.current.precip_in;
    // UV index
    location.uv = weather.current.uv;
    console.log(weather.current.uv);
    // visibility
    location.visibilityKM = weather.current.vis_km;
    location.visibilityMiles = weather.current.vis_miles;

    // hourly forecast
    location.hourly = [];
    for (let i = 0; i < 24; i++) {
      location.hourly.push([
        weather.forecast.forecastday[0].hour[i].time,
        weather.forecast.forecastday[0].hour[i].condition.text,
        weather.forecast.forecastday[0].hour[i].condition.icon,
        weather.forecast.forecastday[0].hour[i].temp_c,
        weather.forecast.forecastday[0].hour[i].temp_f,
      ]);
    }
    main.removeAttribute('style');
    updateDom();
  } catch (err) {
    error.removeAttribute('style');
    error.textContent = err;
    console.error(err);
  }
};

export { location, updateLocation };
