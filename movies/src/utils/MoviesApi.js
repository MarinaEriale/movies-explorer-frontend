function onResponce(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

export class MoviesApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getCards() {
    return fetch(`${this._url}`, {
      headers: this._headers,
    }).then(onResponce);
  }
}

const api = new Api({
  url: "https://nomoreparties.co/v1/cohort-30",
  headers: {
    "Content-Type": "application/json",
  },
});

export default MoviesApi;
