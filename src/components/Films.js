import React from 'react'
import { useState } from 'react'

export default function Films({ films }) {
  const [film, setFilm] = useState([])
  console.log(films);

  return (
    <div className='container-fluid'>
      {films.map((film) => (
        <div className='column' key={film.id}>
          <div className='card horizontal'>

            <div className='card-image'>
              <img src={film.img} alt={film.title} />
              <span class="quality_slider">FHD</span>
            </div>

            <div className='info'>
              <h3>{film.name}</h3>
              <p className='title'>{film.title}</p>
              <p className='nation'>{film.nation}</p>
              <p className='year'>{film.year}</p>
              <p>
                <button onClick={() => { setFilm(film) }}>
                  <a href='#popup1' id='openPopUp'>Detail</a>
                </button>
              </p>
            </div>

          </div>
        </div>


      ))}
      <div id='popup1' className='overlay'>
        <div className='popup'>

          <div class="poster">
            <img src={film.img} alt={film.name} />
            <span class="quality_slider">FHD</span>
          </div>

          <div class="details">
            <h3>{film.title}</h3>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              <p><strong>Director:</strong> {film.director}</p>
              <p><strong>Cast:</strong> {film.cast + ' '}</p>
              <p><strong>Genre:</strong>{film.genre + ' '}</p>
              <p><strong>Duration:</strong>{film.duration}</p>
              <p>{film.description}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
