import './App.css';

import { Route, Link, Switch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Components/Home';
import MapView from './Components/MapView';
import ListView from './Components/ListView';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/" style={{
            fontFamily: 'karla',
            fontSize: '36px',
            color: '#ebcb15',
            textDecoration:"none"
          }}>Villagr</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" style={{
                textDecoration: 'none'
              }}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/map" style={{
                textDecoration: 'none'
              }}>Map</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/list" style={{
                textDecoration: 'none'
              }}>List</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      

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
