
import { html, fixture, expect } from '@open-wc/testing';
import { store } from "../redux/store";
import { reducer } from "../redux/reducer";
import * as actions from '../redux/actions';

const films = [
    {film: 'Test film 01'},
    {film: 'Test film 02'}
];

const film = {film: 'Test film 03'};

describe('Redux', () => {

    it('should handle ADD_FAV action', () => {
  
        expect( actions.addFavFilm({}) ).to.deep.equal({ type: 'ADD_FAV', film: {} });

    });

    it('should handle REMOVE_FAV action', () => {
  
        expect( actions.removeFavFilm({}) ).to.deep.equal({ type: 'REMOVE_FAV', film: {} });

    });
  
    it('has an empty object when action does not exists', () => {
  
        expect( reducer({}, 'test') ).to.deep.equal({});
  
    });

    it('should add new film to global state', () => {

        expect(
            reducer(
                {favs: films},
                actions.addFavFilm(film)
            )
        ).to.deep.equal({favs: [...films, film]});
  
    });

    it('should remove film from global state', () => {
  
        expect(
            reducer(
                {favs: films},
                actions.removeFavFilm(films[0])
            )
        ).to.deep.equal({favs: films.filter(fav => fav.imdbID !== films[0].imdbID) });
    
    });

});