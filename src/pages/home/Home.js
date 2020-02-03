import React from 'react';
import '../../styles/blocks/_background.blocks.scss';
import '../../assets/fonts/font.scss';
import '../home/Home.scss';

import { useTranslation } from 'react-i18next';

function Home (){
    const { t } = useTranslation();


        return(
            <div className="b-background">
            <h1 className="font-got">{t('GameOfThrones.1')}</h1>
            </div>            
        );
}

export default Home;