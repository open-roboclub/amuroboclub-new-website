import React from 'react'



const Contact = ({ books }) => {
  return (
    <div>
      Contact
      {
        books && books.map((blog) =>{ return(<div>{blog.Name}</div>)})}
    </div>
  )
}

export default Contact
