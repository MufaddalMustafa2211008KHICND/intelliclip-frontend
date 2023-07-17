import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AnimatedText from './components/AnimatedText/AnimatedText'
import UploadBtn from './components/UploadBtn/UploadBtn'
import AnimatedText2 from './components/AnimatedText2/AnimatedText2'

const Home = () => {
  return (
    <>
        <Navbar/>
        {/* <AnimatedText/> */}
        <AnimatedText2/>
        <UploadBtn/>
    </>
  )
}

export default Home