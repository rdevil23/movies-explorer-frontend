import { mainUrl } from './constants';

class MainApi {
  constructor({ mainUrl }) {
    this._mainUrl = mainUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status} - не удалось установить подключение к MainApi`);
    }
  }

  _request(endpoint, options) {
    return fetch(`${this._mainUrl}${endpoint}`, options).then(this._checkResponse);
  }

  register(username, email, password) {
    return this._request('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: username, email: email, password: password }),
    });
  }

  authorize(email, password) {
    return this._request('/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    });
  }

  checkToken(token) {
    return this._request(`/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  }

  getUserInfo(token) {
    return this._request(`/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  updateUserInfo(user, token) {
    return this._request(`/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: user.username, email: user.email }),
    });
  }

  getMovies(token) {
    return this._request(`/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  addMovieToSaved(movie, token) {
    return this._request(`/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        description: movie.description,
        year: movie.year,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    });
  }

  removeMovieFromSaved(movieId, token) {
    return this._request(`/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
}

const mainApi = new MainApi({
  mainUrl,
});
export default mainApi;
