import React from 'react';
import spain from '../assets/images/spain1.svg';
import uk from '../assets/images/uk1.svg';
import { useTranslation } from 'react-i18next';
import house from '../assets/images/casa.svg';


function Header() {
    
    const {i18n} = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
        console.log(lang)
    }    

        return(
            <nav className="b-header">
               <ul className="b-header__languages">
                   <li className="homePage"><img src={house} alt="house" /></li>
                   <li onClick={() => handleClick('es')}><img src={spain} alt="spain"/></li>
                   <li onClick={() => handleClick('en')}><img src={uk} alt="uk"/></li>
               </ul>
            {/*<button type="image" src={spain}></button>
               <button type="image" src={uk}></button> */}
            </nav>
                 
        );
}

export default Header;