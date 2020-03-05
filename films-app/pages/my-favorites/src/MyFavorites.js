import { LitElement, html, css } from 'lit-element';
import { filmsComp } from '../../../components/filmsComp';
import { store } from '../../../redux/store';

export class MyFavorites extends LitElement {

  static get styles() {
    return css``;
  }

  constructor() {

    super();

  }

  render() {
    return html`
      <div class="films-container">
        <films-comp .films=${store.getState().favs} .favorites=${store.getState().favs}></films-comp>
      </div>
    `;
  }

}
