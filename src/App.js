import './App.css';

import { Route, Link, Switch } from 'react-router-dom';

import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <h1>hello service-one</h1>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
      </Switch>
    </div>
  );
}

export default App;
