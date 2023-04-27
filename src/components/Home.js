import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../components/Cart';
import { fetchData, showCartPost } from '../reducers/cartSlice';
import { db } from "../firebase";

import {
    collection,
    addDoc,
    setDoc,
    doc,
} from 'firebase/firestore'


export const Home = () => {
    const { cartItems } = useSelector((store) => store.cart);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchData())
        dispatch(showCartPost())
    }, [dispatch])



    const showPosts = cartItems.map(post => <Cart {...post} key={post.id} />)

    const hendleAddDoc = () => {

        if (!collection.exist) {
            cartItems.forEach(async (postData) => {
                try {
                    const docRef = await addDoc(collection(db, "posts"), postData);
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            });
        }
        else {
            console.error("Hi, bro", cartItems);
        }
    }







    return (
        <>
            <div className="container">


                {showPosts}
                <button onClick={() => { hendleAddDoc() }}>hi</button>

            </div >
        </>
    )
}
