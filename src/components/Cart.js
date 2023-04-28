import { useNavigate } from 'react-router-dom'
import React from 'react';

const style = {
    containerPost: 'flex flex-nowrap flex-col justify-end bg-myBg h-96 m-5 cursor-pointer',
    postImage: 'h-72 w-96',
    image: 'h-full w-full',
    postTitle: 'bg-header w-96 h-36 overflow-hidden text-ellipsis text-center align-middle p-5'
}

const Cart = ({ id, imageUrl, title }) => {
    const navigate = useNavigate()
    const handlePostClick = (postId) => {

        navigate(`/post/${postId}`, { replace: true });
    };

    return (
        <>
            <div
                className={style.containerPost}
                key={id}
                onClick={() => handlePostClick(id)}
            >
                <div className={style.postImage}>
                    <img className={style.image} src={imageUrl} alt="post_img" />
                </div>
                <div className={style.postTitle}>{title}</div>
            </div >
        </>


    )
}

export default Cart

