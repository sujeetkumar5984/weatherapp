function getWeather() {
    let city = document.getElementById('city').value;
    let apiKey = "323f37d9895e112240f08ae36a89f254"; // OpenWeather API Key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            let weatherInfo = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <img src="${icon}" class="icon" />
                <p>Temperature: <strong>${data.main.temp}°C</strong></p>
                <p>Weather: <strong>${data.weather[0].description}</strong></p>
                <p>Humidity: <strong>${data.main.humidity}%</strong></p>
                <p>Wind Speed: <strong>${data.wind.speed} m/s</strong></p>
            `;
            document.getElementById('weather').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = `<p style="color: red;">City not found!</p>`;
        });
}
