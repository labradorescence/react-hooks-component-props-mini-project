import React from 'react'

export default function About({blog}) { //object destructuring
  return (
   <aside>
    {blog.image===undefined?<img src = "https://via.placeholder.com/215" alt="blog logo"/>:<img src = {blog.image} alt="blog logo"/>}
    <p>{blog.about}</p>
   </aside>
  )
}
