import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AnimatedText from './components/AnimatedText/AnimatedText'
import UploadBtn from './components/UploadBtn/UploadBtn'
import AnimatedText2 from './components/AnimatedText2/AnimatedText2'
import useAuth from '../../hooks/useAuth'
import Cookies from 'js-cookie'

const Home = () => {

  const { checkAuth } = useAuth()

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if(checkAuth()) {
      setIsAuthenticated(true)
      fetch(process.env.REACT_APP_API_URL+'/users', {
        headers: {
          Authorization: Cookies.get('token')
        }
      }).then(async (res) => {
        console.log(await res.json())
      }).catch(e => console.log(e))
    }
  }, [])

  return (
    <>
        <Navbar isAuthenticated={isAuthenticated}/>
        {/* <AnimatedText/> */}
        <AnimatedText2/>
        <UploadBtn isAuthenticated={isAuthenticated}/>
    </>
  )
}

export default Home