import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Post = () => {
    const { postId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        if (postId) {
            fetch(`http://localhost:3001/posts/${postId}`)
                .then(res => res.json())
                .then(data => setPost(data))
        }
    }, [postId]);
    console.log("p", post)

    return (
        <>
            <div className='page_post'>
                <p className='post-page_title'>{post.title}</p>
                <div className='post-page_img'>

                    <img src={post.imageUrl} alt="imageUrl" />
                </div>
                <div className='post-page_description'>{post.description}</div>
                <div className='post-expert_comment'>
                    <h3 className='title-expertComment'>Expert comment</h3>
                    <div className='post-page_comment'>{post.expertComment}</div>
                </div>
            </div>
        </>
    );
};
