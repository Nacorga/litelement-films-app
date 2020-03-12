import { LitElement, html, css } from 'lit-element';

export class searchComp extends LitElement {

  static get styles() {
    return css`
      .header-container {
        display: flex;
        justify-content: center;
      }

      .header-container input:focus,
      .header-container button:focus {
        outline: none;
      }

      .header-container input {
        width: 100%;
        max-width: 320px;
        border-radius: 5px;
        box-shadow: none;
        border: 1px solid #dedede;
        padding: 5px;
        margin-right: 5px;
      }

      .header-container button {
        cursor: pointer;
        height: 100%;
        font-size: 16px;
        border: 1px solid rgb(222, 222, 222);
        background: #3f51b5;
        color: #fff;
        border-radius: 5px;
        padding: 5px 15px;
      }
    `
  }

  constructor() {

    super();

    this.inputText = '';

  }

  render() {
    return html`
      <div class="header-container">
        <input placeholder="Search a film..." @keyup=${e => this.setInputText(e.target.value)}>
        <button @click=${() => this.searchFilms()}>Search</button>
      </div>
    `;
  }

  setInputText(value) {
    this.inputText = value
  }

  searchFilms() {

    const event = new CustomEvent('search-films', {
      detail: {
        inputText: this.inputText
      }
    });

    this.dispatchEvent(event);

  }

}

customElements.define("search-comp", searchComp);