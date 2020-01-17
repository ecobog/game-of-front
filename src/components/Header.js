import React, {Component} from 'react';
import spain from '../assets/images/spain1.svg';
import uk from '../assets/images/uk1.svg';

class Header extends Component {

    render(){
        return(
            <nav>
               <ul className="language">
                   <li><img src={spain}/></li>
                   <li><img src={uk}/></li>
               </ul>
            {/*<button type="image" src={spain}></button>
               <button type="image" src={uk}></button> */}
            </nav>
                 
        );
    }
}

export default Header;