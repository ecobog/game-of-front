import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {

    render(){
        return(
                <nav className="b-footer">
                    <div className="container">
                    <ul className="b-footer__list">
                        <Link to= './characters'>
                            <li className="personajes" className="header__nav">PERSONAJES</li>  
                        </Link>
                        <Link to='./houses'>
                            <li className="casas" className="header__nav">CASAS</li>
                        </Link>
                        <Link to= './timeline'>
                            <li className="cronologia" className="header__nav">CRONOLOGIA</li>
                        </Link>

                    </ul>
                    </div>
                </nav>
                 
        );
    }
}

export default Footer;