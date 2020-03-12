import { html, fixture, expect } from '@open-wc/testing';

import '../components/filmsComp';

const favFilms = [
    {
        imdbID: "abc001",
    },
    {
        imdbID: "abc002",
    }
]

const film = {
    imdbID: "abc001",
};

describe('Films component', () => {
  
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

    it('check if film is favorite', async () => {

        const el = await fixture(html`
            <films-comp .favorites=${favFilms}></films-comp>
        `);

        el.checkFilm(film);

        expect(el.checkFilm(film)).to.be.equal(true);

    });

});