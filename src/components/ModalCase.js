import React from 'react'

export default function ModalCase({setIsOpen, film}) {
  return (
    <div className='modal-show' onClick={() =>setIsOpen(false)}>
        <div id='modal1' className='modal' style={{display: 'block', top: '35%'}}>
            <div className='modal-content'>
                <h4>Trailer of {film.title} </h4>
                <div class="video-container"><iframe width='560' height='315' src={film.clip} title={film.title} frameBorder='0' 
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>
                </div>
            </div>
            
        </div>
    </div>
  )
}
