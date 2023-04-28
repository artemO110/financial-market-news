import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../components/Cart';
import { setCartItems } from '../reducers/cartSlice';
import { db } from "../firebase";
import {
    query,
    collection,
    onSnapshot,
} from 'firebase/firestore'

const style = {
    container: 'flex flex-wrap justify-around bg-myBg w-full'
}


export const Home = () => {
    const cartItems = useSelector((store) => store.cart.cartItems);
    const dispatch = useDispatch();
    const [cartNews, setCartNews] = useState([]);

    useEffect(() => {
        const getCartItemsFromFirestore = async () => {
            try {
                const q = query(collection(db, 'posts'));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    let cartItemsArr = [];
                    querySnapshot.forEach((doc) => {
                        cartItemsArr.push({ ...doc.data(), id: doc.id });
                    });
                    dispatch(setCartItems(cartItemsArr));
                    setCartNews(cartItemsArr);
                });

                return () => unsubscribe();
            } catch (error) {
                console.error('Ошибка при получении списка товаров из Firestore:', error);
            }
        };

        if (cartItems.length === 0) {
            getCartItemsFromFirestore();
        } else {
            setCartNews(cartItems);
        }
    }, [cartItems, dispatch]);

    const showPosts = cartNews.map(post => <Cart {...post} key={post.id} />);

    return (
        <>
            <div className={style.container}>
                {cartNews.length > 0 ? (
                    showPosts
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};
