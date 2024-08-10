import React from 'react'
import { Hero } from './Hero'
import { RedefineExpirience } from './RedefineExpirience'
import { ImageSlider } from './ImageSlider'

export const Home = () => {
  return (
    <div>
      <div className=''>
        <Hero />
      </div>
      <div className=''>
        <RedefineExpirience />
      </div>
      <div className=''>
        <ImageSlider />
      </div>
    </div>
  )
}
