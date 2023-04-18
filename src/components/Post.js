import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Post = () => {
    let curentPost = [];
    const { postId } = useParams();
    const { cartItems } = useSelector((store) => store.cart)
    for (let i = 0; i < cartItems.length; i++) {
        if (postId === cartItems[i].id) {
            curentPost = cartItems[i];
        }
    }

    return (
        <>
            {cartItems && (
                <div className='page_post'>
                    <p className='post-page_title'>{curentPost.title}</p>
                    <div className='post-page_img'>

                        <img src={curentPost.imageUrl} alt="imageUrl" />
                    </div>
                    <div className='post-page_description'>{curentPost.description}</div>
                    <div className='post-expert_comment'>
                        <h3 className='title-expertComment'>Expert comment</h3>
                        <div className='post-page_comment'>{curentPost.expertComment}</div>
                    </div>
                </div>
            )}

        </>
    );
};
