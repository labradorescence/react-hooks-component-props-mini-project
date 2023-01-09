import React from 'react'

function getEmoji (minute){

    let emoji = minute < 30?  "☕️": "🍱"
    let interval = minute < 30? 5:10
    
    let emojires = ""
    
    for(let i = 0; i < minute ; i+=interval){
        emojires += emoji
    }

    console.log(emojires)
    return emojires
}

export default function Article({title, date="January 1, 1970", preview, minutes}) {

    const emoji = getEmoji(minutes)
   // console.log(emoji)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {emoji} {minutes} min read</small>
            <p>{preview}</p>     
        </article>
    )
}