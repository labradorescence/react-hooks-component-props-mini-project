import React from 'react'
import Article from "./Article"

export default function ArticleList({posts}) {

    const article = posts.map(eachPost => (
       <Article 
            title = {eachPost.title} 
            date = {eachPost.date}
            preview = {eachPost.preview}
            minutes = {eachPost.minutes}
            key = {eachPost.id}
            />
    ))

    return (
        <main>
            {article}
        </main>
    )
}