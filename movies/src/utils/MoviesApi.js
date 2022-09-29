function onResponce(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

export class Api {
  constructor({ url }) {
    this._url = url;
  }

  getMoviesCards() {
    return fetch(`${this._url}`).then(onResponce);
  }
}

const moviesApi = new Api({
  url: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;