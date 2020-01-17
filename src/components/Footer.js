import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {

    render(){
        return(
            <div>
                <nav>
                    <ul className="nav-links">
                        <Link to= './characters'>
                            <li>PERSONAJES</li>
                        </Link>
                        <Link to='./houses'>
                            <li>CASAS</li>
                        </Link>
                        <Link to= './timeline'>
                            <li>CRONOLOGIA</li>
                        </Link>

                    </ul>
                </nav>
            </div>  
                 
        );
    }
}

export default Footer;