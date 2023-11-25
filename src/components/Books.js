import React from 'react'
import '../styles/Books.css'

function Books({ title, content, thumbnail, card, setCard }) {
  
  function CardHandle(title) {
    setCard(title);
  }

  return (
    <div className='books'>
      {card ? (
        <div></div>
      ) : (
        <>
          <div className='image__container'>
            <img
              src={thumbnail ? thumbnail : "https://scribemedia.com/wp-content/uploads/2018/11/give-to-get.jpg"}
              alt='thumbnail'
            />
          </div>
          <div className='books__content'>
            <h1>{title ? title : "No title"}</h1>
            <p className='content'>{content ? content : "No Content"}</p>
            <button onClick={() => CardHandle(title)}>Read Now</button>
          </div>
        </>
      )}
    </div>
  );
}


export default Books
