import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

export class filmComp extends LitElement {

  static get properties() {
    return {
      film: { type: Object }
    };
  }

  static get styles() {
    return css`
        .film-poster {
          position: relative;
          height: 240px;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .film-poster::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.33) 0%,rgba(0,0,0,0) 25%);
        }

        .film-poster iron-icon {
          cursor: pointer;
          position: absolute;
          top: 5px;
          right: 5px;
          color: yellow;
          width: 32px;
          height: 32px;
          z-index: 1;
        }

        .film-card-content {
          padding: 15px;
        }

        .film-card-content h4 {
          font-size: 16px;
          margin: 0 0 5px 0;
        }

        .film-card-content h5 {
          font-size: 16px;
          font-weight: normal;
          margin: 0;
        }
    `
  }

  constructor() {

    super();

  }

  render() {

    return html`
      <div class="film-poster" style="background-image: url('${() => this.checkImage(this.film)}')">
        <iron-icon
          icon=${this.film.isFav ? "star" : "star-border"}
          @click=${() => this.favoritesChange(this.film.isFav ? 'remove' : 'add')}>
        </iron-icon>
      </div>
      <div class="film-card-content">
        <h4>${this.film.Year}</h4>
        <h5>${this.film.Title}</h5>
      </div>
    `;
  }

  checkImage(film) {
    return film.Poster !== 'N/A' ? film.Poster : '../assets/img/img-placeholder.png';
  }

  favoritesChange(action) {

    if (action === 'add') {
      this.film = {...this.film, isFav: true};
    }

    if (action === 'remove') {
      this.film = {...this.film, isFav: false};
    }

    this.sendEvent(action);

  }

  sendEvent(action) {

    const event = new CustomEvent('favorites-change', {
      detail: {
        action,
        film: this.film
      }
    });

    document.dispatchEvent(event);

  }

}

customElements.define("film-comp", filmComp);