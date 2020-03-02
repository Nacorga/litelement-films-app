import { LitElement, html, css } from 'lit-element';
import { searchComp } from '../../../components/searchComp.js';
import { filmsComp } from '../../../components/filmsComp.js';
import { spinnerComp } from '../../../components/spinnerComp.js';

export class FilmsApp extends LitElement {

  static get properties() {
    return {
      loading: { type: Boolean },
      searchText: { type: String },
      films: { type: Array },
      totalResults: { type: Number },
      page: { type: Number }
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

      .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .header-row .header-search h2{
        margin-top: 0;
      }

      .header-row .results-nav span {
        cursor: pointer;
        font-size: 32px;
      }

      .header-row .results-nav span:not(:last-child) {
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

    this.loading = false;
    this.searchText = null;
    this.films = [];
    this.totalResults = null;
    this.page = 1;

  }

  render() {
    return html`
      <header>
        <search-comp @search-films="${this.searchFilm}"></search-comp>
      </header>

      <main>

        ${this.totalResults ?
          html`
            <div class="header-row">
              <div class="header-search">
                <h2>Searching by: ${this.searchText}</h2>
                <h3>Total results: ${this.totalResults}</h3>
              </div>
              <div class="results-nav">
                <span @click=${() => {
                  if (this.page > 1) {
                    this.loading = true;
                    this.page--;
                    this.filmsApiCall();
                  }
                }}>-</span>
                <span @click=${() => {
                  if ( this.page < (this.totalResults / 10) ) {
                    this.loading = true;
                    this.page++;
                    this.filmsApiCall();
                  }
                }}>+</span>
              </div>
            </div>
          `
          :
          ''
        }

        ${this.loading ?
          html`
            <spinner-comp></spinner-comp>
          `
          :
          html`
            <div class="films-container">
              <films-comp .films=${this.films}></films-comp>
            </div>
          `
        }

      </main>
    `;
  }

  searchFilm(e) {

    this.loading = true;
    this.totalResults = null;
    this.searchText = e.detail.inputText;
    this.page = 1;

    this.filmsApiCall();

  }

  filmsApiCall() {

    fetch(`https://www.omdbapi.com/?s=${this.searchText}&plot=full&page=${this.page}&apikey=e477ed6a`)
      .then(response => response.json()
        .then(myJson => {
          this.films = myJson.Search;
          this.totalResults = myJson.totalResults;
          this.loading = false;
        })
      );

  }

}
