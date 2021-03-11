import React from 'react'
import Card from './Card'

function Body() {
  return (
    <section>
      <div className="flex flex-col text-center max-w-7xl mx-auto py-24">
        <div className="mx-auto max-w-lg">
          <h1 className="text-6xl mb-3 uppercase text-center tracking-wide">Serv<span>i</span>ces</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias voluptatum explicabo!</p>
        </div>
        <div className="flex items-center justify-center flex-wrap mt-12">
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
