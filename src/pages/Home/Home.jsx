import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AnimatedText from './components/AnimatedText/AnimatedText'
import UploadBtn from './components/UploadBtn/UploadBtn'

const Home = () => {
  return (
    <>
        <Navbar/>
        <AnimatedText/>
        <UploadBtn/>
    </>
  )
}

export default Home