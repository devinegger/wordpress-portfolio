// Open Weather Map API Key
// this is a free key, but you can get your own at https://openweathermap.org/api
const appID = "529c579a705ff017b686d2796f662626";

// base Geo api endpoint url
let geoURL = "https://api.openweathermap.org/geo/1.0/";

// base weather api endpoint url
let weatherURL =
  "https://api.openweathermap.org/data/3.0/onecall?units=imperial&exclude=hourly,minutely,alerts,current";

export async function getLatLon(location) {
  // set query params with zip
  geoURL += "zip?zip=" + location + ",US";

  // add appid to url
  geoURL += "&appid=" + appID;

  const response = await fetch(geoURL);
  const json = await response.json();

  let data = {};

  if (json.cod) {
    data.error = json.cod;
  } else {
    data.name = json.name;
    data.lat = Math.round(json.lat);
    data.lon = Math.round(json.lon);
  }

  return data;
}

export async function getWeather(lat, lon) {
  // set query params with lat and lon
  weatherURL += "&lat=" + lat + "&lon=" + lon;

  // add key to url
  weatherURL += "&appid=" + appID;

  const response = await fetch(weatherURL);
  const json = await response.json();

  // console.log(json);

  // error response from latlon api call will return false
  if (!json.daily) {
    return false;
  }
  return json.daily;
}
