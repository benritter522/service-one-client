import './App.css';

import { Route, Link, Switch } from 'react-router-dom';

import Home from './Components/Home';
import MapView from './Components/MapView';
import ListView from './Components/ListView';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/map">Map</Link>
      <Link to="/list">List</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={MapView} />
        <Route path="/list" component={ListView} />
        {/* <Route path="/about" component={About} /> */}
      </Switch>
    </div>
  );
}

export default App;
