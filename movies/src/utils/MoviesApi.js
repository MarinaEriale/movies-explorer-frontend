function onResponce(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

export class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getMoviesCards() {
    return fetch(this._url).then(onResponce);
  }
}

const moviesApi = new Api({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers:{
    "Content-Type": "application/json",
  },
});

export default moviesApi;
