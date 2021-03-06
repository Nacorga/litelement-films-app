import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import '../pages/search-films/search-films.js';
import '../pages/my-favorites/my-favorites.js';

import { store } from '../redux/store';
import { addFavFilm, removeFavFilm } from '../redux/actions';

export class FilmsApp extends LitElement {

  static get properties() {
    return {
      page: { type: String },
      favorites: { type: Array }
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
      }

      header {
        padding: 30px 0;
      }

      header nav a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        font-weight: normal;
      }

      header nav a.active {
        font-weight: bold;
      }

      header nav a:not(:last-child) {
        margin-right: 15px;
      }

      main {
        flex-grow: 1;
        width: 100%;
        padding: 0 15px 30px 15px;
        box-sizing: border-box;
      }

    `;
  }

  constructor() {

    super();

    this.page = 'search';

    this.setFavoritesFromState();

    document.addEventListener('favorites-change', (e) => {

      this.favoritesChange(e.detail.action, e.detail.film);

    });

  }

  render() {
    return html`

      <header>
        <nav>
          <a class=${this.__navClass('search')} href="#search" @click=${() => this.__onNavClicked('search')}>Search films</a>
          <a class=${this.__navClass('favorites')} href="#favorites" @click=${() => this.__onNavClicked('favorites')}>My favorites</a>
        </nav>
      </header>

      <main>
        ${this._renderPage()}
      </main>

    `;
  }

  _renderPage() {
    switch (this.page) {
      case 'search':
        return html`
          <search-films></search-films>
        `;
      case 'favorites':
        return html`
          <my-favorites .favorites=${this.favorites}></my-favorites>
        `;
      default:
        return html`
          <p>Page not found try going to <a href="#search">Main</a></p>
        `;
    }
  }

  __onNavClicked(page) {
    this.page = page;
  }

  __navClass(page) {
    return classMap({ active: this.page === page });
  }

  favoritesChange(action, film) {

    if (action === 'add') {
      this.saveAsFavorite(film);
    }

    if (action === 'remove') {
      this.removeFromFavorites(film);
    }

    this.setFavoritesFromState();

    this.saveFavsInLocalStorage();

  }

  saveAsFavorite(film) {
    store.dispatch(addFavFilm(film));
  }

  removeFromFavorites(film) {
    store.dispatch(removeFavFilm(film));
  }

  setFavoritesFromState() {
    this.favorites = store.getState().favs;
  }

  saveFavsInLocalStorage() {
    localStorage.setItem('films', JSON.stringify(store.getState().favs));
  }

}
