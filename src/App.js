import Header from './components/header';
import {Route, Switch, useLocation, useParams} from 'react-router-dom';
import Popular from './components/popular';
import Modal from './components/infoFilms';
import Search from './components/search'
import { useSelector } from 'react-redux';

function App() {
  const { movie } = useSelector((state) => state.getMoviesInfo);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route path="/search" component={Search} />
        <Route path={`/films/id/${movie.id}/info`} component={Modal} />
      </Switch>
    </div>
  );
}


export default App;
