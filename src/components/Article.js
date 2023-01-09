import React from 'react'

export default function Article({title, date, preview}) {
    return (
        <article>
            <h3>{title}</h3>
            {date===undefined?"January 1, 1970":<small>{date}</small>}
            <p>{preview}</p>
        </article>
    )
}