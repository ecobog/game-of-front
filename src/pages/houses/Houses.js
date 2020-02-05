import React, { useState, useEffect } from 'react';
import '../../styles/blocks/_background.blocks.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Characters() {

    useEffect(() => {
        fetchItems()
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.got.show/api/show/houses');

        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div className="container">
            <div className="row">
                {items.map(item => (
                    
                    <div className="col-2">
                        <Link to={`/houses/${item.name}`}>
                            <img src={item.logoURL ? item.logoURL : null} key={item.logoURL} alt="house" width={180} height={220}></img>
                            <h4 key={item.id}>{item.name}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Characters;