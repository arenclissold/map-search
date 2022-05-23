import mapboxgl from "mapbox-gl";

const baseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places";
const token = config.apiKey;
mapboxgl.accessToken = token;

const form = document.querySelector("form");
const coordinates = document.querySelector("p");

const fetchLocation = (location) => {
  fetch(`${baseUrl}/${location}.json?access_token=${token}`)
    .then(res => res.json())
    .then((data) => {
      const latitude = Number(data.features[0].center[1]);
      const longitude = Number(data.features[0].center[0]);
      coordinates.innerText = `Latitude: ${latitude}\nLongitude: ${longitude}`;
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        center: [longitude, latitude],
        zoom: 12
      });
      new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
    });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = event.currentTarget.querySelector("input").value;
  fetchLocation(location);
});
