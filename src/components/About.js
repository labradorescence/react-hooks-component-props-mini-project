import React from 'react'

export default function About({image="https://via.placeholder.com/215", about}) { //object destructuring
  return (
   <aside>
    <img src={image} alt="blog logo"/>
    <p>{about}</p>
   </aside>
  )
}
