export const addFavFilm = (film) => {
    return {
        type: 'ADD_FAV',
        film
    }
}

export const removeFavFilm = (film) => {
    return {
        type: 'REMOVE_FAV',
        film
    }
}