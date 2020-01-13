import React, {Component} from 'react';
import fotoPrincipal from '../assets/images/fotoPrincipal.svg';

class Home extends Component {
    
    render(){
        return(
            <div className="principal">
              <img src={fotoPrincipal}/>
            </div>            
        );
    }
}

export default Home;