import Cookies from 'js-cookie'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './MyVideos.module.css'

const MyVideos= ({  }) => 

{
useEffect(()=> {fetchvideos() },[])

const [videos,setvideos]=useState([])

const fetchvideos =()=>{
  const token = Cookies.get('token')
  fetch('https://intelliclip-backend-e7a360c0a7f3.herokuapp.com/videos/all',{
method:'POST', headers:{'Authorization':'Bearer' + ' '+token}

  }) .then((response)=>{
    return response.json()
  }).then((videos)=>{setvideos(videos.data.videos);console.log(videos.data.videos)})
}
    return (
      <main className={styles.table}>
<table >
  <thead>
    <tr className={styles.heading}>
      <th className={styles.tablemain}>ID</th>
      <th className={styles.tablemain}>NAME</th>
      <th className={styles.tablemain}>UPLOAD AT</th>
    </tr>
  </thead>
  <tbody>
    
   {
    videos.map((video)=>(
<tr>
      <td><span className={styles.head}></span>{video.id}</td>
      <td><span className={styles.head}></span>{video.name}</td>
      <td><span className={styles.head}></span>{video.date}</td>
      

   
    </tr>
  
    ))
   }
    
  </tbody>
</table>
       
    </main>
    )

  }

  export default MyVideos