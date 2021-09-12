import Header from './header';
import {Route, Switch} from 'react-router-dom';
import Popular from './popular';
import Modal from './infoFilms';
import Search from './search'
import Save from './save'
import Info from './info'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route path="/search" component={Search} />
        <Route path="/favorite" component={Save} />
        <Route path="/info" component={Info} />
        <Route path={`/films/id/:id/info`} component={Modal} />
      </Switch>
    </div>
  );
}


export default App;
