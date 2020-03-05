import { LitElement, html, css } from 'lit-element';
import { filmComp } from './filmComp';

import { connect } from 'pwa-helpers';
import { store } from '../redux/store';

export class filmsComp extends connect(store)(LitElement) {

  static get properties() {
    return {
      films: { type: Array },
      favorites: { type: Array }
    };
  }

  static get styles() {
    return css`
      .films-list {
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        box-sizing: border-box;
      }

      .films-list .film-card {
        border-radius: 5px;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
      }
    `
  }

  constructor() {

    super();

    this.favorites = store.getState().favs;

  }

  render() {
    return html`
      <ul class="films-list">
        ${this.films.map(film => {

          if ( this.favorites.map(fav => fav.imdbID).indexOf(film.imdbID) !== -1 ) {
            film.isFav = true;
          }

          return html`
            <li class="film-card">
              <film-comp .film=${film}></film-comp>
            </li>
          `
        })}
      </ul>
    `;
  }

  stateChanged(state) {
    this.favorites = state.favs;
  }

}

customElements.define("films-comp", filmsComp);