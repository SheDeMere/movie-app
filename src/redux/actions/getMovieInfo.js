export const getInfoMovie = (id) => {
    return dispatch => {
        dispatch({ type: 'get/modal/start' })
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eaeabd37164e78e6dbadc4a59825464c&language=ru`)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'get/modal/success',
                    payload: json
                })
            })
    }
}