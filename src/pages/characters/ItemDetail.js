import React, {useState, useEffect} from 'react';
import '../../styles/blocks/_background.blocks.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemDetail ({match}){
    const petition = match.params.id;

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.got.show/api/show/characters/${petition}`)
        const item = await fetchItem.json();
        setItem(item);
    } 
    
    useEffect(() => {
        fetchItem();
    },[fetchItem, match]);

    const [item, setItem] = useState({});

return (
    <div>
        <h4>{item.name}</h4> 
        <img src={item.image} alt="avatar" key={item.image}></img>
        <p>
            {item.mother}
        </p>
        <p style={{color: 'red'}}>
            {item.father}
        </p>

    </div> 
        );
    }

export default ItemDetail;