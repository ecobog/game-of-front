import React, { useState, useEffect } from 'react';
import '../../styles/blocks/_background.blocks.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/fonts/Lato.scss';
import '../../assets/fonts/font-characters.scss';

function ItemDetail({ match }) {
    const petition = match.params.id;

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.got.show/api/show/characters/${petition}`)
        const item = await fetchItem.json();

        setItem(item);
    }

    useEffect(() => {
        fetchItem();
    }, [fetchItem, match]);

    const [item, setItem] = useState({});
    console.log(item);


    return (
        <div className="b-container__all">
            <div className="container-fluid">
                <div className="itemDetail" className="row">
                    <div>
                        <img src={item.image} alt=" " key={item.image}></img>
                        <h4 className="font-characters">{item.name}</h4>
                    </div>
                </div>
<div className="container" className="prueba">
                <div className="row">
                    <div col="col-2">
                        <h4 className="font-characters">ALIANZAS</h4>
                        <p className="lato">{item.allegiances}</p>
                    </div>

                    <div col="col-2">
                        <h4 className="font-characters">APARICIONES</h4>
                        <p className="lato">{item.appearances}</p>
                    </div>

                    <div col="col-2">
                        <h4 className="font-characters">PADRE</h4>
                        <p className="lato">
                            {item.father}
                        </p>
                    </div>

                    <div col="col-2">
                        <h4 className="font-characters">DESCENDIENTES</h4>
                        <p className="lato">
                            {item.siblings}
                        </p>
                    </div>

                    <div col="col-2">
                        <h4 className="font-characters">TITULOS</h4>
                        <p className="lato">
                            {item.titles}
                        </p>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default ItemDetail;