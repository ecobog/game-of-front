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
            <Route path="/characters" component={Characters}/>
            <Route path="/houses" component={Houses}/>
            <Route path="/timeline" component={Timeline}/>
            <Route path="/" component={Home} />
          </Switch>
        <Footer/>
        </div>
    </Router>
  );
}

export default App;