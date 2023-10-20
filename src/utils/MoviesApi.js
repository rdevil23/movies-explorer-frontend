import { moviesUrl } from './constants';

class MovieApi {
  constructor({ moviesUrl }) {
    this._moviesUrl = moviesUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Ошибка: ${res.status} - не удалось установить подключение к MoviesApi`
      );
    }
  }

  _request(endpoint, options) {
    return fetch(`${this._moviesUrl}${endpoint}`, options).then(this._checkResponse);
  }

  getMovies() {
    return this._request('/');
  }
}

const movieApi = new MovieApi({ moviesUrl });
export default movieApi;
