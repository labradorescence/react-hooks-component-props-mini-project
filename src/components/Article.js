import React from 'react'

function getEmoji(minutes){

    let emoji = minutes < 30? "☕️":"🍱"
    let interval = minutes < 30? 5:10

    let emojires = ""
    for(let i =0; i <minutes; i+=interval){
        emojires += emoji
        console.log(emojires)
    }

    return emojires
}

export default function Article({title, date="January 1, 1970", preview, key, minutes}) {

    const emoji = getEmoji(minutes)

  return (
    <article>
        <h3>{title}</h3>
        <small>{date} {emoji} {minutes} min read</small>
        <p>{preview}</p>
    </article>
  )
}
