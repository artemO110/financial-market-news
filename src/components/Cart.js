import { useNavigate } from 'react-router-dom'
import React from 'react';



const Cart = ({ id, imageUrl, title }) => {
    const navigate = useNavigate()
    const handlePostClick = (postId) => {

        navigate(`/post/${postId}`, { replace: true });
    };

    return (
        <>
            <div
                className="container_post"
                key={id}
                onClick={() => handlePostClick(id)}
            >
                <div className="post_image">
                    <img src={imageUrl} alt="post_img" />
                </div>
                <div className="post_title">{title}</div>
            </div >
        </>


    )
}

export default Cart

