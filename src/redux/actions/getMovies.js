const KEY = 'eaeabd37164e78e6dbadc4a59825464c'
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=ru`


export const getMovies = () => {
    return (dispatch) => {
        dispatch({ type: 'get/movies/start' })
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'get/movies/success',
                    payload: json
                })
            })
    }
}