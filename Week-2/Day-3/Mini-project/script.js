async function runWeather() {
  const output = document.getElementById("weatherOutput");
  const location = document.getElementById("locationInput").value.trim();

  if (!location) {
    output.textContent = "Please enter a location.";
    return;
  }

  output.textContent = "Fetching weather...";

  try {
    // Step 1: Convert location to latitude & longitude (Geocoding)
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("Location not found");
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Step 2: Fetch weather using coordinates
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    const temp = weatherData.current_weather.temperature;
    const wind = weatherData.current_weather.windspeed;

    output.textContent =
      `Location: ${name}, ${country}\n` +
      `Current Temp: ${temp}°C\n` +
      `Wind Speed: ${wind} km/h`;

  } catch (error) {
    output.textContent = "Error fetching weather data.";
  }
}

function clearWeather() {
  document.getElementById("locationInput").value = "";
  document.getElementById("weatherOutput").textContent = "Output will appear here...";
}
