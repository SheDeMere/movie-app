export const searchMovies = (name) => {
    return dispatch => {
        dispatch({ type: 'search/start' })
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=eaeabd37164e78e6dbadc4a59825464c&query=${name}`)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'search/success',
                    payload: json
                })
            })
    }
}