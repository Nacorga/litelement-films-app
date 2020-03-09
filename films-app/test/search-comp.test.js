import { html, fixture, expect } from '@open-wc/testing';

import '../components/searchComp';

describe('searchComp', () => {
  
  it('has inputText empty by default', async () => {

    const el = await fixture(html`
      <search-comp></search-comp>
    `);

    expect(el.inputText).to.equal('');

  });

});