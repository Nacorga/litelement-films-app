import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';

import '../films-app.js';

describe('Films app', () => {
  
  it('has search page by default', async () => {

    const el = await fixture(html`
      <films-app></films-app>
    `);

    expect(el.page).to.be.equal('search');

  });

  it('has call function when click on nav item', async () => {

    const el = await fixture(html`
      <films-app></films-app>
    `);

    const mock = stub(el, '__onNavClicked');
    el.shadowRoot.querySelector('a').click();

    expect(mock).to.have.callCount(1);

  });



  it('set page when call funtion', async () => {

    const el = await fixture(html`
      <films-app></films-app>
    `);

    el.__onNavClicked('test');

    expect(el.page).to.be.equal('test');

  });

  it(`will save film as favorite when action is "add"`, async () => {

    const el = await fixture(html`
      <films-app></films-app>
    `);

    const mock = stub(el, 'saveAsFavorite');
    el.favoritesChange('add', {});

    expect(mock).to.have.callCount(1);

  });

  it(`will remove film from favorites when action is "remove"`, async () => {

    const el = await fixture(html`
      <films-app></films-app>
    `);

    const mock = stub(el, 'removeFromFavorites');
    el.favoritesChange('remove', {});

    expect(mock).to.have.callCount(1);

  });

});