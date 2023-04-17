import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
// import { getData } from '../Api/GetData'

export const Home = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/posts`)
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const getPosts = data.slice(0, 6);

    const handlePostClick = (postId) => {
        // console.log("postId", postId)
        // Выполняем переход на страницу Post с передачей ID поста в параметрах
        navigate(`/post/${postId}`, { replace: true });
    };

    return (
        <div className="container">
            {getPosts.map((items) => {
                return (
                    <div
                        className="container_post"
                        key={items.id}
                        onClick={() => handlePostClick(items.id)}
                    >
                        <div className="post_image">
                            <img src={items.imageUrl} alt="post_img" />
                        </div>
                        <div className="post_title">{items.title}</div>
                    </div>
                )
            })}
        </div>
    )
}
