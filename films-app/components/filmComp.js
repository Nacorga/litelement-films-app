import { LitElement, html, css } from 'lit-element';

export class filmComp extends LitElement {

  static get properties() {
    return {
      film: { type: Object }
    };
  }

  static get styles() {
    return css`
        .film-poster {
            height: 240px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
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
      <div class="film-poster" style="background-image: url('${this.film.Poster !== 'N/A' ? this.film.Poster : '../assets/img/img-placeholder.png'}')"></div>
      <div class="film-card-content">
        <h4>${this.film.Year}</h4>
        <h5>${this.film.Title}</h5>
      </div>
    `;
  }

}

customElements.define("film-comp", filmComp);