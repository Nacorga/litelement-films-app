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

});