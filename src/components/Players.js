import React from 'react'
import { LOPlayers } from '../shared/ListOfPlayers'

export default function Players  {
    return (
        <div className='container'>
            {LOPlayers.map(
                (player) => (
                    <div className='column'>
                        <div className='card'>
                            <img src={player.img} />
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <p><button>Detail</button></p>
                        </div>
                    </div>
                )
            )
            }
        </div>
    )

}