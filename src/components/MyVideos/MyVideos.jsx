import Cookies from 'js-cookie'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

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
      <main>
<h2>Responsive table</h2>
<table class="table">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Uploaded At</th>
<th>Video</th>
    </tr>
  </thead>
  <tbody>
    
   {
    videos.map((video)=>(
<tr>
      <td><span class="res-head">Id:</span>{video.id}</td>
      <td><span class="res-head">Name:</span>{video.name}</td>
      <td><span class="res-head">Uploaded At:</span>{video.date}</td>
      <td><video src={video.file.url} height={'200px'} width={'200px'} controls>
        </video></td>

   
    </tr>
  
    ))
   }
    
  </tbody>
</table>
       
    </main>
    )

  }

  export default MyVideos