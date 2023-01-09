import React from 'react'
import Article from "./Article"

export default function ArticleList({blog}) {

    const article = blog.posts.map(eachPost => 
       <Article 
            title = {eachPost.title} 
            date = {eachPost.date}
            preview = {eachPost.preview}
            key = {eachPost.id}
            />
    )

    return (
        <>
            {article}
        </>
    )
}
