import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/fonts/font-nav.scss';
import { useTranslation } from 'react-i18next';


function Footer (){
    const { t } = useTranslation();

    function handleClick(lang) {
        t.changeLanguage(lang);
    }
        return(
                <nav className="b-footer">
                    <div className="container">
                    <ul className="b-footer__list">
                        <Link to= '/characters'>
                            <li className="pointer" onClick={() => handleClick('characters')}>{t('Characters.2')}</li>  
                        </Link>
                        <Link to='/houses'>
                            <li className="pointer" onClick={() => handleClick('houses')}>{t('Houses.3')}</li>
                        </Link>
                        <Link to='/timeline'>
                            <li className="pointer"onClick={() => handleClick('lifetime')}>{t('Lifetime.4')}</li>
                        </Link>

                    </ul>
                    </div>
                </nav>
                 
        );
    }


export default Footer;