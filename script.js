// Функція для відправлення AJAX-запиту
function getWeather() {
  const apiKey = "5d066958a60d315387d9492393935c19";
  const city = "Lviv"; // Місто для якого потрібно отримати погоду

  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

  // Створюємо об'єкт XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Встановлюємо метод та URL для запиту
  xhr.open("GET", apiUrl, true);

  // Встановлюємо обробник події для відповіді на запит
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          // Оновлюємо відомості про погоду на сторінці
          document.getElementById("temperature").textContent = data.main.temp;
          document.getElementById("pressure").textContent = data.main.pressure;
          document.getElementById("description").textContent = data.weather[0].description;
          document.getElementById("humidity").textContent = data.main.humidity;
          document.getElementById("wind-speed").textContent = data.wind.speed;
          document.getElementById("wind-direction").textContent = data.wind.deg;
          document.getElementById("weather-icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      }
  };

  // Відправляємо запит
  xhr.send();
}

// Викликаємо функцію для отримання погоди
getWeather();