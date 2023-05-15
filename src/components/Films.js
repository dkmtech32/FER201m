import React from 'react'

export default function Films({films}) {
    console.log(films);

  return (
    <div className='container'>
    {films.map((f)=>(
     <div className='column' key={f.id}>
     <div className='card'>
         <img src={f.img}  alt={f.title}/>
         <h3>{f.name}</h3>
         <p className='title'>{f.title}</p>
         <p className='nation'>{f.nation}</p>
         <p className='year'>{f.year}</p>
         <p><button>Detail</button></p>
     </div>
 </div>


    ))}
         
     </div>
  )
}
