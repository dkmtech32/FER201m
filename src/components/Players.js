import React from 'react'
import { data } from '../shared/ListOfPlayers'
import { Link } from 'react-router-dom'

export default function Players() {
    return (
        <div className='container'>
            {data.map(
                (player) => (
                    <div className='column' key={player.id}>
                        <div className='card'>
                            <img src={player.img} alt={player.name} />
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <Link to={`detail/${player.id}`}>
                                <p><button>Detail</button></p>
                            </Link>

                        </div>
                    </div>
                )
            )
            }
        </div>
    )

}
