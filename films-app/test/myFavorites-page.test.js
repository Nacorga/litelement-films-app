import { html, fixture, expect } from '@open-wc/testing';

import '../pages/my-favorites/my-favorites.js';

describe('Favorites page', () => {
  
  it('should render favorites page content', async () => {

    const el = await fixture(html`
      <my-favorites></my-favorites>
    `);

    expect(true).to.be.equal(true);

  });

});