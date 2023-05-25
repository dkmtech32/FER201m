import React from 'react'
import { useState } from 'react'

export default function Films({ films }) {
  const [film, setFilm] = useState([])
  console.log(films);

  return (
    <div className='container'>
      {films.map((film) => (
        <div className='column' key={film.id}>
          <div className='card'>

            <div className='poster'>
              <img src={film.img} alt={film.title} />
              <span class="quality_slider">FHD</span>
            </div>

            <div className='info'>
              <h3>{film.name}</h3>
              <p className='title'>{film.title}</p>
              <p className='nation'>{film.nation}</p>
              <p className='year'>{film.year}</p>
              <p><button onClick={() => { setFilm(film) }}>
                <a href='#popup1' id='openPopUp'>Detail</a>
              </button>
              </p>
            </div>

          </div>
        </div>


      ))}
      <div id='popup1' className='overlay'>
        <div className='popup'>
          <img src={film.img} alt={film.name} />
          <h3>{film.title}</h3>
          <a className='close' href='#'>&times;</a>
          <div className='content'>
            {film.description}
          </div>
        </div>
      </div>

    </div>
  )
}
