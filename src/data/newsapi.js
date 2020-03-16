export function getNews(page = 1) {
  let url = `https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=b8e624aaad324e60be0b7e72f926ed4c&page=${page}`;
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    })
}
