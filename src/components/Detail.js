
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { LOFilms } from '../shared/ListOfFilms';

import ModalCase from './ModalCase';

export default function Detail() {
  const username = useParams();
  const id=username.id;
  const [film, setFilm] = useState([])
 
  useEffect(() => {
    
    const fetchFilms = async () => {
      try {
        const response = await fetch(`https://64901b431e6aa71680ca9595.mockapi.io/film/${id}`);
        if (response.ok) {
          const film = await response.json();        
          setFilm(film);          
        } else {
          throw new Error('Failed to fetch films');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchFilms();
    
  }, []);

  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='detail'>

        <div class="poster">
          <img src={`${film.img}`} alt={film.name} />
          <span class="quality_slider">FHD</span>

          <div className='overlay1'>

            <a onClick={() => setIsOpen(true)}>
              <div class="play-button">
                <i class="fa-solid fa-play"></i>
              </div>
            </a>

          </div>

        </div>

        <div class="details">
          <h3>{film.title}</h3>
          <Link to={`/`}>
            <a className='back'>&larr;</a>
          </Link>
          <div className='content'>
            <p><strong>Director:</strong> {film.director}</p>
            <p><strong>Cast:</strong> {film.cast + ' '}</p>
            <p><strong>Genre: </strong>{film.genre + ' '}</p>
            <p><strong>Duration: </strong>{film.duration}</p>
            <p>{film.description}</p>
            {/* <svg data-testid="SmartDisplayIcon"></svg> */}
          </div>
        </div>


      </div>
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
    </div>
  )
}
