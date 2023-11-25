import React from 'react'
import '../styles/Card.css'

function Card({title, content, thumbnail,rating,author,pub,ln}) {
  return (
    <div className='card'>
        <div className='image__container'>
            <img
              src={thumbnail ? thumbnail : "https://scribemedia.com/wp-content/uploads/2018/11/give-to-get.jpg"}
              alt='thumbnail'
            />
          </div>
          <div className='books__content'>
            <h1>{title ? title : "No title"}</h1>
            <h4>{author}</h4>
            <p className='content'>{content ? content : "No Content"}</p>
            <div className='info'>

                <div className='spans'>
                    <span>Avg Rating : {rating}</span>
                    <span>Publisher : {pub}</span>
                    <span>Languange: {ln}</span>
                </div>

                <div className='btns'>
                    <button>Read More</button>
                    <button>More Info!</button>
                </div>

            </div>
          </div>
    </div>
  )
}

export default Card