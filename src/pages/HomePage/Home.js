import React from 'react'
import { Hero } from './Hero'
import { RedefineExpirience } from './RedefineExpirience'
import { ImageSlider } from './ImageSlider'
import { ChooseCollor } from './ChooseCollor'

export const Home = () => {
  return (
    <div>
      <div className=''>
        <Hero />
      </div>
      <div className=''>
        <RedefineExpirience />
      </div>
      <div className='mt-10'>
        <ImageSlider />
      </div>
      <div className="mt-20">
        <ChooseCollor />
      </div>
    </div>
  )
}
