import React from 'react'
import { Hero } from './Hero'
import { RedefineExpirience } from './RedefineExpirience'
import { ImageSlider } from './ImageSlider'
import { ChooseCollor } from './ChooseCollor'
import { PeopleSaying } from './PeopleSaying'
import { CleanOceans } from './CleanOceans'

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
      <div className="mt-28 ">
        <ChooseCollor />
      </div>
      <div className="">
        <PeopleSaying />
      </div>
      <div className="">
        <CleanOceans />
      </div>
    </div>
  )
}
