import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';

import '../components/searchComp';

describe('Search component', () => {
  
  it('has inputText empty by default', async () => {

    const el = await fixture(html`
      <search-comp></search-comp>
    `);

    expect(el.inputText).to.equal('');

  });

  it('should dispatch event on input keyup', async () => {

    const el = await fixture(html`
      <search-comp></search-comp>
    `);

    const mock = stub(el, 'setInputText');
    const event = new KeyboardEvent('keyup');
    el.shadowRoot.querySelector('input').dispatchEvent(event);

    expect(mock).to.have.callCount(1);

  });

  it('should search films on button click', async () => {

    const el = await fixture(html`
      <search-comp></search-comp>
    `);

    const mock = stub(el, 'searchFilms');
    el.shadowRoot.querySelector('button').click();

    expect(mock).to.have.callCount(1);

  });

  it('should dispatch an event on button click', async () => {

    const el = await fixture(html`
      <search-comp></search-comp>
    `);

    const event = new CustomEvent('search-films');

    const mock = stub(el, 'dispatchEvent');
    el.shadowRoot.querySelector('button').click();

    expect(mock).to.have.callCount(1);

  });

  it('set inputText var equal to input text value', async () => {

    const el = await fixture(html`
      <search-comp></search-comp>
    `);

    el.setInputText('test')

    expect(el.inputText).to.be.equal('test');

  });

});