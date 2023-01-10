import React from 'react'
import Article from "./Article"

export default function ArticleList({posts}) {
    console.log(posts)//array? object? [{},{},{}]

    const article = posts.map(eachPost => (
        <Article
            title = {eachPost.title}
            date ={eachPost.date}
            preview = {eachPost.preview}
            key = {eachPost.id}
            minutes = {eachPost.minutes}
        />
    ))
  return (
    <main>
        {article}
    </main>
  )
}
