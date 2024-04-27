import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[25px] mb-[50px] w-[80vw] border-emerald-500 border-[2px] rounded-[20px] p-5 font-serif'>
      <NavLink to={`/blog/${post.id}`} >
        <p className=' text-center'>{post.title}</p>
      </NavLink>
      <p className=' text-center'>
        By
        <span>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <p className='text-center'>{post.category}</p>
        </NavLink>
      </p>
      <p> Posted on {post.date} </p>
      <p className=' text-center'> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink className="text-blue-500" key={index} post={post.id} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
