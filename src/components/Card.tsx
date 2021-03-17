import React from 'react';
import './Card.scss';

function Card() {
  return (
    <div className="flex flex-col items-start justify-center bg-img-1 bg-cover my-3 mx-2.5 rounded-lg max-w-4/5 md:max-w-1/3">
      <div className="c-bg-opacity p-8 rounded-lg">
        <div className="w-20 h-20 mb-5"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
        <h2 className="text-3xl mb-3 uppercase text-left text-white">Web Design</h2>
        <p className="text-left text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed architecto placeat beatae tenetur officia quod</p>
      </div>
    </div>
  )
}

export default Card
