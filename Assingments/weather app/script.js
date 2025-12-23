async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const { lat, lon } = await getGeoLoc(city);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a42fb23879612a5b91dd54a73f3b89e`
  );
  const data = await response.json();

  document.getElementById("weatherData").innerHTML = `
            <div>
                <p>
                    Temperature: ${(data.main.temp - 273.14).toFixed(2)}℃
                </p>
                <p>
                    Humidity: ${data.main.humidity}%
                </p>
                <p>
                    Description: ${data.weather[0].description}
                </p>
            </div>
            <img src="https://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@4x.png" alt="Weather Icon">
    `;
}

async function getGeoLoc(City) {
  console.log(City);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=1&appid=3a42fb23879612a5b91dd54a73f3b89e`
  );
  const data = await response.json();

  const lat = data[0].lat;
  const lon = data[0].lon;

  return { lat, lon };
}
