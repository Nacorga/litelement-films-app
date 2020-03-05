import { LitElement, html, css } from 'lit-element';
import { filmsComp } from '../../../components/filmsComp';

export class MyFavorites extends LitElement {

  static get properties() {
    return {
      page: { type: String },
      favorites: { type: Array }
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {

    super();

  }

  render() {
    return html`
      <div class="films-container">
        <films-comp .films=${this.favorites} .favorites=${this.favorites}></films-comp>
      </div>
    `;
  }

}
