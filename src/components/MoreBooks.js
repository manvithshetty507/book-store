import React from 'react'

function MoreBooks({thumbnail}) {
  return (
    <div className='morebooks'>
      <img src={thumbnail ? thumbnail: "http://books.google.com/books/content?id=g9lYgyeJgNAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} 
        alt='image' 
        style={{width:'200px',height:'250px',objectFit:'cover',borderRadius:'5px'}}
      />
    </div>
  )
}

export default MoreBooks