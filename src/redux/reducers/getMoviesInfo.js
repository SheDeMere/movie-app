const initialState = {
    movie: [],
    loading: false
}

const getMoviesInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'get/modal/start':
            return {
                ...state,
                loading: true
            }

        case 'get/modal/success':
            return {
                ...state,
                loading: false,
                movie: action.payload
            }

        default:
            return state;
    }
}

export default getMoviesInfo;