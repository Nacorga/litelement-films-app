import { LitElement, html, css } from 'lit-element';
import { searchComp } from '../../../components/searchComp.js';
import { filmsComp } from '../../../components/filmsComp.js';

export class FilmsApp extends LitElement {

  static get properties() {
    return {
      inputText: { type: String }
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
        width: 100%;
        background: transparent;
      }

      main {
        flex-grow: 1;
        width: 100%;
      }

      .films-list {
        width: 100%;
        padding: 15px;
        margin: 0;
        list-style: none;
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        box-sizing: border-box;
      }

      .films-list .film {
        height: 240px;
        background: red;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <search-comp @search-films="${this.filmsApiCall}"></search-comp>
      </header>

      <main>
        ${filmsComp}
      </main>
    `;
  }

  filmsApiCall(e) {
    console.log(e.detail.inputText);
  }
}
