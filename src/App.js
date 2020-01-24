import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import Characters from './pages/characters/Characters';
import Houses from './pages/houses/Houses';
import Timeline from './pages/timeline/Timeline'
import Footer from './components/Footer';
import './styles.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (  
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path="/characters" component={Characters}/>
            <Route exact path="/houses" component={Houses}/>
            <Route exact path="/timeline" component={Timeline}/>
            <Route exact path="/" component={Home} />
          </Switch>
        <Footer/>
        </div>
    </Router>
  );
}

export default App;