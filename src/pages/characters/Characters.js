import React, {useState, useEffect} from 'react';
import '../../styles/blocks/_background.blocks.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function Characters (){

    useEffect(() => {
        fetchItems()
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.got.show/api/show/characters');
        
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

return (
    <div>
        {items.map(item => (
            <div>
            <Link to={`/characters/${item.name}`}>
            <img src={item.image} key={item.image} alt=" "></img>
            <h4 key={item.id}>{item.name}</h4> 
            
            </Link>
            </div> 
        ))}
    </div>
    );
}

export default Characters;