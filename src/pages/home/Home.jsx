import React from 'react'
import Highlights from '../../components/highlights/Highlights'
import Aboutinfo from '../../components/about/aboutInfo'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/categories'

function Home() {
  return (
    <>
      <Slider />
      <Highlights />
      <Aboutinfo />
      <Categories />

    </>
  )
}

export default Home