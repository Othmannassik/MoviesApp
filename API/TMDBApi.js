const API_TOKEN = "4dfc92fbf18b1e741b3ef25986a035dc";
export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))

  }
  // API/TMDBApi.js

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }
  