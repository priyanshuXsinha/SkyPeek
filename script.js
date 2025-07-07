const API_KEY = "749fdec296c9480dbd454657250607";

document.getElementById("weatherForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const location = document.getElementById("locationInput").value;
  const resultBox = document.getElementById("weatherResult");

  try {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`);
    const data = await res.json();

    document.getElementById("city").textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temp").textContent = data.current.temp_c;
    document.getElementById("condition").textContent = data.current.condition.text;
    document.getElementById("humidity").textContent = data.current.humidity;
    document.getElementById("wind").textContent = data.current.wind_kph;
    document.getElementById("icon").src = data.current.condition.icon;

    resultBox.classList.remove("hidden");
  } catch (error) {
    alert("Location not found. Please try again.");
    resultBox.classList.add("hidden");
  }
});
