import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/fonts/font-nav.scss';

class Footer extends Component {

    render(){
        return(
                <nav className="b-footer">
                    <div className="container">
                    <ul className="b-footer__list">
                        <Link to= '/characters'>
                            <li className="pointer">PERSONAJES</li>  
                        </Link>
                        <Link to='/houses'>
                            <li className="pointer">CASAS</li>
                        </Link>
                        <Link to='/timeline'>
                            <li className="pointer">CRONOLOGIA</li>
                        </Link>

                    </ul>
                    </div>
                </nav>
                 
        );
    }
}

export default Footer;