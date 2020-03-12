import { html, fixture, expect } from '@open-wc/testing';

import '../pages/search-films/search-films.js';

describe('Search page', () => {
  
  it('has default global props', async () => {

    const el = await fixture(html`
      <search-films></search-films>
    `);

    expect(el.loading).to.be.equal(false) &&
    expect(el.searchText).to.be.equal(null) &&
    expect(el.films.length).to.be.equal(0) &&
    expect(el.totalResults).to.be.equal(null) &&
    expect(el.page).to.be.equal(1);

  });

  it('set props when search films', async () => {

    const el = await fixture(html`
      <search-films></search-films>
    `);

    el.searchFilm('blabla');
    
    expect(el.loading).to.be.equal(true) &&
    expect(el.totalResults).to.be.equal(null) &&
    expect(el.searchText).to.be.equal('blabla') &&
    expect(el.page).to.be.equal(1);

  });

  it('set props when go to previous page', async () => {

    const el = await fixture(html`
      <search-films></search-films>
    `);

    el.goToPrevPage(3);
    
    expect(el.loading).to.be.equal(true) &&
    expect(el.page).to.be.equal(2);

  });

  it('set props when go to next page', async () => {

    const el = await fixture(html`
      <search-films></search-films>
    `);

    el.totalResults = 300;

    el.goToNextPage(3);
    
    expect(el.loading).to.be.equal(true) &&
    expect(el.page).to.be.equal(4);

  });

});