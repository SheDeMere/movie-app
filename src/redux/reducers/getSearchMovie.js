const initialState = {
    movies: [],
    loading: false
}
console.log(initialState.movies)

const getSearchMovie = (state = initialState, action) => {
    switch (action.type) {
        case 'search/start':
            return {
                ...state,
                loading: true
            }
        case 'search/success':
            return {
                ...state,
                loading: false,
                movies: action.payload
            }

        default:
            return state;
    }
}

export default getSearchMovie;