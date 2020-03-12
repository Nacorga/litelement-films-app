import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';

import '../components/filmComp';

const film = {
    Title: "The Incredible Hulk",
    Year: "2008",
    imdbID: "tt0800080",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"
};

const noPosterfilm = {
    Title: "The Incredible Hulk",
    Year: "2008",
    imdbID: "tt0800080",
    Type: "movie",
    Poster: "N/A"
};

describe('Film component', () => {
  
    it('should call function on icon click', async () => {

        const el = await fixture(html`
          <film-comp .film=${film}></film-comp>
        `);
    
        const mock = stub(el, 'favoritesChange');
        el.shadowRoot.querySelector('iron-icon').click();
    
        expect(mock).to.have.callCount(1);
    
    });

    it('set defaulut image if not have Poster', async () => {

        const el = await fixture(html`
          <film-comp .film=${noPosterfilm}></film-comp>
        `);

        expect(el.checkImage(noPosterfilm)).not.to.be.equal('N/A');
    
    
    });

    it('set film as favorite when add it', async () => {

        const el = await fixture(html`
          <film-comp .film=${film}></film-comp>
        `);

        el.favoritesChange('add')

        expect(el.film.isFav).to.be.equal(true);
    
    
    });

    it('set film as not favorite when remove it', async () => {

        const el = await fixture(html`
          <film-comp .film=${film}></film-comp>
        `);

        el.favoritesChange('remove')

        expect(el.film.isFav).to.be.equal(false);
    
    
    });

});