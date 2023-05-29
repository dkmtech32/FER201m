import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { data } from '../shared/ListOfPlayers';

export default function Details() {
    const userName = useParams();
    const player = data.find(obj => {
        return obj.id == userName.id;
    });
    let cost = player.cost.toLocaleString();
    return (
        <div className='container'>
            <Link to={`/`}>
                <p><button>Back</button></p>
            </Link>
            <div className='product-card'>
                <div className='badge'>{player.name}</div>
                <div className='product-tumb'>
                    <img src={`../${player.img}`} alt='' />
                </div>
                <div className='product-details'>
                    <h4>{player.club}</h4>
                    <div className='product-price'>Market value: € {cost}</div>
                    <p>{player.info}</p>
                    <div className='product-bottom-details'></div>
                </div>
            </div>
        </div>
    )

}
