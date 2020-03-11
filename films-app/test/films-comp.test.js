import { html, fixture, expect } from '@open-wc/testing';

import '../components/filmsComp';
import '../components/filmComp';

const testFilms = [
    {
        Title: "The Incredible Hulk",
        Year: "2008",
        imdbID: "tt0800080",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"
    },
    {
        Title: "Test film",
        Year: "2008",
        imdbID: "tt0800082",
        Type: "movie",
        Poster: "N/A"
    }
];

describe('filmsComp', () => {
  
    it('films prop is an array', async () => {

        const el = await fixture(html`
            <films-comp></films-comp>
        `);

        expect( el.films ).to.be.a( 'Array' );

    });

    it('favorites prop is an array', async () => {

        const el = await fixture(html`
            <films-comp></films-comp>
        `);

        expect( el.favorites ).to.be.a( 'array' );

    });

    it('film component is equal to number of films', async () => {

        const el = await fixture(html`
            <films-comp></films-comp>
        `);

        expect(el.shadowRoot.querySelectorAll('film-card').length).to.equal(el.films.length);

    });

});