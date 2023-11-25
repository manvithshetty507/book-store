import React from 'react'
import BookList from './BookList'

function Body({searchQuery,search,setSearch}) {
  return (
    <div>
        <BookList searchQuery={searchQuery} search={search} setSearch={setSearch}/>
    </div>
  )
}

export default Body