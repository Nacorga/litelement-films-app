import { html, fixture, expect, aTimeout } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';

import '../pages/search-films/search-films.js';

let element;

describe('Search page', () => {

  beforeEach(async () => {
    element = await fixture(html`
      <search-films></search-films>
    `);
  });
  
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

  it(`"filmsApiCall" should return a list of films`, async () => {

    const stubFetch = stub(window, 'fetch');
    
    const request = body => {

      const mockResponse = new Response(JSON.stringify(body), {
          status: 200,
          headers: {
              "Content-type": "application/json"
          }
      });

      return Promise.resolve(mockResponse);

    };

    stubFetch.returns(Promise.resolve(request( { Search: ["test"], totalResults: 1 } )));

    await element.filmsApiCall();

    await aTimeout(1);

    expect(element.films).to.eql(["test"]);
    expect(element.totalResults).to.eql(1);
    expect(element.loading).to.eql(false);

    Sinon.restore();

  });

});