import { LitElement, html } from 'lit-element';
import { filmsComp } from '../../../components/filmsComp';

export class MyFavorites extends LitElement {

  static get properties() {
    return {
      page: { type: String },
      favorites: { type: Array }
    };
  }

  render() {
    return html`
      <div class="films-container">
        <films-comp .films=${this.favorites} .favorites=${this.favorites}></films-comp>
      </div>
    `;
  }

}
