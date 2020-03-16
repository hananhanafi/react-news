export function getWeather(q="Yogyakarta"){
    let url = `https://api.weatherapi.com/v1/current.json?key=92019c14b02a40ea9ad61538201503&q=${q}`;
    return fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        return data;
    })
}