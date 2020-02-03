import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import Characters from './pages/characters/Characters';
import ItemDetail from './pages/characters/ItemDetail';
import Houses from './pages/houses/Houses';
import Timeline from './pages/timeline/Timeline'
import Footer from './components/Footer';
import './styles.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (  
    <Router>
      <div>
        <Header/>
          <Switch>
            <Route path="/characters" exact component={Characters}/>
            <Route path="/houses" exact component={Houses}/>
            <Route path="/timeline" exact component={Timeline}/>
            <Route path="/" exact component={Home} />
            <Route path="/characters/:id" component={ItemDetail} />
          </Switch>
        <Footer/>
        </div>
    </Router>
  );
}

export default App;