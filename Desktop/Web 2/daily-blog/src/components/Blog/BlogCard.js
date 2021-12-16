import React from 'react'
import LongCard from './LongCard'
import "./BlogCard.css";



const BlogCard = ({ blogs }) => {
    return (
        <div className='blogcard'>
            {
                blogs && blogs.map(blog => (
                    <LongCard
                        id={blog._id}
                        title={blog.title}
                        headerImage={blog.headerImage}
                        description={blog.Description}
                        author={blog.author}
                    />
                ))
            }
        </div>
    )
}

export default BlogCard
