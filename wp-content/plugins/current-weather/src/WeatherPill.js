import { gmdate } from "@wordpress/date";
import icons from './icons.js';

export default function WeatherPill({ pillCount = "" }) {
  let defaultIcon = <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="transparent"/><circle cx="100" cy="100" r="70" fill="#FFD100"/></svg>;

  return (
    <div className={`wp-block-create-block-current-weather__pill pill-${pillCount}`}>
      <p className="wp-block-create-block-current-weather__day-name"></p>
      <div className="wp-block-create-block-current-weather__icon">
        {defaultIcon}
      </div>
      <div className="wp-block-create-block-current-weather__temps">
        <div className="wp-block-create-block-current-weather__day"></div>
        <div className="wp-block-create-block-current-weather__night"></div>
      </div>
    </div>
  );
}

export function populateWeather(forecast) {
  forecast.map((day, index) => {
    const date = new Date(day.dt * 1000);
    const dayName = gmdate("l", date);

    const highTemp = Math.round(day.temp.max);
    const lowTemp = Math.round(day.temp.min);
    const icon = day.weather[0].icon.substring(0, 2) + "d";

    const currentPill = document.querySelector(`.pill-${index}`);

    if (currentPill) {
      const pillName = currentPill.querySelector(
        ".wp-block-create-block-current-weather__day-name"
      );
      const pillIcon = currentPill.querySelector(
        ".wp-block-create-block-current-weather__icon"
      );
      const pillHigh = currentPill.querySelector(
        ".wp-block-create-block-current-weather__day"
      );
      const pillLow = currentPill.querySelector(
        ".wp-block-create-block-current-weather__night"
      );

      if (index === 0) {
        pillName.innerHTML = "today";
      } else {
        pillName.innerHTML = dayName;
      }
      pillIcon.innerHTML = icons[icon];
      pillHigh.innerHTML = highTemp;
      pillLow.innerHTML = lowTemp;
    }
  });
}
