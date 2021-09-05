const initialState = {
    movies: [],
    loading: false
}

 const getMovies = (state = initialState, action) => {
    switch (action.type) {
        case 'get/movies/start':
            return {
                ...state,
                loading: true
            }

        case 'get/movies/success':
            return {
                ...state,
                loading: false,
                movies: action.payload,
            }
        default:
            return state;
    }
}

export default getMovies;