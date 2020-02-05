import React, {useState, useEffect} from 'react';
import '../../styles/blocks/_background.blocks.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './Characters';


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
    console.log(item);

return (
    <div>
        <img src={item.image} alt=" " key={item.image}></img>
        <h4>{item.name}</h4> 
        
        <h4>CASA</h4>
            <img src={item.logoURL} key={item.logoURL} alt="house" width={180} height={220}></img>

        <h4>ALIANZAS</h4>
            <p>{item.allegiances}</p>

        <h4>APARICIONES</h4>
            <p>{item.appearances}</p>

        <h4>PADRE</h4>
        <p>
            {item.father}
        </p>

        <h4>PADRE</h4>
        <p>
            {item.father}
        </p>

        <h4>DESCENDIENTES</h4>
        <p>
            {item.siblings}
        </p>

        <h4>TITULOS</h4>
        <p>
            {item.titles}
        </p>

    </div> 
        );
    }

export default ItemDetail;