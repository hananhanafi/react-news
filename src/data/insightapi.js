export function getMarsWeather(){
    let url = `https://api.nasa.gov/insight_weather/?api_key=PsIAFs3ofuem82D78gv8NylXuNicBUXqa8suQkBe&feedtype=json&ver=1.0`;
    return fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        return data;
    })
}