import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const style = {

    pagePost: `flex flex-col items-center content-center slate-400 bg-myBg`,
    container: `w-4/5`,
    postPageTitle: 'font-sans font-bold text-4xl uppercase text-white text-left mt-20',
    postPageImg: '',
    postPageDescription: 'font-sans font-medium text-lg text-black leading-5 not-italic my-10',
    postExpertComment: 'bg-white p-9',
    titleExpertComment: 'capitalize font-sans font-bold text-sm text-black leading-6 not-italic mb-5',
    postPageComment: 'font-sans font-bold text-sm text-black leading-6 not-italic mb-5',


    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5ED]`,
    heading: `text-3xl font-bolt text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
    count: `text-center p-2`
}

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
                <div className={style.pagePost}>
                    <div className={style.container}>

                        <p className={style.postPageTitle}>{curentPost.title}</p>
                        <div className={style.postPageImg}>

                            <img src={curentPost.imageUrl} alt="imageUrl" />
                        </div>
                        <div className={style.postPageDescription}>{curentPost.description}</div>
                        <div className={style.postExpertComment}>
                            <h3 className={style.titleExpertComment}>Expert comment</h3>
                            <div className={style.postPageComment}>{curentPost.expertComment}</div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};
