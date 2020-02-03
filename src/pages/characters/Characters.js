import React, { useState, useEffect } from 'react';
import '../../styles/blocks/_background.blocks.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../characters/Characters.scss';
import cat from '../../assets/images/cat.jpg';


function Characters() {

    useEffect(() => {
        fetchItems()
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.got.show/api/show/characters');

        const items = await data.json();
        // items.map(item => console.log(item.image));
        setItems(items);
    }

    /* return (
        <div className="container">
            <div className="row ">
                {items.map(item => (
                    <div className="col-2">
                        <Link to={`/characters/${item.name}`}>
                            <div className="image-container">
                                <img src={item.image} key={item.image} alt=" " width={200}></img>
                                <h4 key={item.id}>{item.name}</h4>
                            </div>
                            
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    ); */
    return (
        <div className="container-custom">
            <div className="container2">
            {items.map(item => (
                    
                    <Link to={`/characters/${item.name}`}>
                        <div className="image-container">
                            <img src={item.image ? item.image : cat} key={item.image} alt="character" width={120} height={200}></img>
                            <p key={item.id} className="name">{item.name}</p>
                        </div>
                        
                    </Link>
            ))}
            </div>
        </div>
    );
}

export default Characters;