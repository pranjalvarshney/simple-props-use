import React from 'react'
import './Post.css'
const Post = ({post,i}) => {
    return(
        <div className="post-container">
            <h2 className="post-heading">{post.title}</h2>
            <img className="post-img" src={post.img} alt=""></img>
            <p className="post-para">{post.body}</p>
            <div className="post-info">
                <h5>Article no: {i + 1}</h5>
                <h4>{post.author}</h4>
            </div>
        </div>
    )
}
export default Post