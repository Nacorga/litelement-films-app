const initialState = {
    favs: JSON.parse(localStorage.getItem("films") || "[]")
}
  
export const reducer = (state = initialState, action) => {

    switch(action.type) {

        case "ADD_FAV":

            return {
                ...state,
                favs: [...state.favs, action.film]
            };

        case "REMOVE_FAV":

            return {
                ...state,
                favs: state.favs.filter(fav => fav.imdbID !== action.film.imdbID)
            };

        default:
            return state;

    }
}