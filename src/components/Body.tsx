import React from 'react'
import Card from './Card'
import './Body.scss'

function Body() {
  return (
    <section>
      <div className="flex flex-col text-center max-w-9xl mx-auto py-24 max-w">
        <div className="mx-auto max-w-lg px-8">
          <h1 className="text-6xl mb-3 uppercase text-center tracking-widest">Serv<span>i</span>ces</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias voluptatum explicabo!</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-12 flex-wrap md:flex-row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}

export default Body
