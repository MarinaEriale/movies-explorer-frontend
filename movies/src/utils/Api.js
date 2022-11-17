function onResponce(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

export class Api {
  constructor({ url }) {
    this._url = url;
  }

  _headers() {
    const jwt = localStorage.getItem("jwt");
    return {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    };
  }

  getSavedMovies() {
    return fetch (`${this._url}/movies`, {
     headers: this._headers(),
    })
       .then(onResponce)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers(),
    }).then(onResponce);
  }

  // changeCardLike(cardId, isLiked) {
  //   return fetch (`${this._url}/cards/${cardId}/likes`, {
  //     method: isLiked ?'PUT' : 'DELETE',
  //     headers: this._headers(),
  //    })
  //       .then(onResponce)
  // }

  editUserInfo(data) {
    return fetch (`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers(),
      body: JSON.stringify({
        name: data.name,
        email: data.email
      }),
     })
        .then(onResponce)
  }

  addNewMovie(data) {
    return fetch(`${this._url}/movies` , {
      method: "POST",
      headers: this._headers(),
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`, 
        movieId: data.id,
      }),
    }).then(onResponce);
  }

  deleteMovie(MovieId) {
    return fetch(`${this._url}/movies/${MovieId}`, {
      method: "DELETE",
      headers: this._headers(),
    }).then(onResponce);
  }
}

const api = new Api({
  // url: "http://localhost:3000",
  url:'https://api.marina.movies.nomoredomains.sbs',
});

export default api;
