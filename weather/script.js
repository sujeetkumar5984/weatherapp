const apiKey = "323f37d9895e112240f08ae36a89f254"; // ⚠️ Apni sahi API key yahan paste karo
const city = "Darbhanga";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log("API Response:", data);
    if (data.cod === 200) {
      document.getElementById("weather-info").innerHTML =
        `Weather in ${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`;
    } else {
      document.getElementById("weather-info").innerHTML = "City Not Found!";
      console.error("Error from API:", data.message);
    }
  })
  .catch(error => console.error("Fetch Error:", error));
