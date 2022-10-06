function onResponce(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

export class Api {
  constructor({url}) {
    this._url = url;
  }

  _headers() {
    const jwt = localStorage.getItem('jwt');
    return {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    };
  }

  getCards() {
    return fetch (`${this._url}/cards`, {
     headers: this._headers(),
    })
       .then(onResponce)
  }

  getUserInfo() {
    return fetch (`${this._url}/users/me`, {
      headers: this._headers(),
     })
        .then(onResponce)
  }

  changeCardLike(cardId, isLiked) {
    return fetch (`${this._url}/cards/${cardId}/likes`, {
      method: isLiked ?'PUT' : 'DELETE',
      headers: this._headers(),
     })
        .then(onResponce)
  }

  editUserInfo(data) {
    return fetch (`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers(),
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
     })
        .then(onResponce)
  }

  addNewCard(data) {
    return fetch (`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
     })
        .then(onResponce)
  }

  deleteCard(cardId) {
    return fetch (`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers(),
     })
        .then(onResponce)
  }

  editAvatar(link) {
    return fetch (`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers(),
      body: JSON.stringify({
        avatar: link
      }),
     })
        .then(onResponce)
  }
}

const api = new Api({
  // url:'http://localhost:3000',
  url:'https://api.marina.place.nomoredomains.sbs',
});

export default api;
