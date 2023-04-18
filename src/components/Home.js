import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../components/Cart'
import { fetchData, showCartPost } from '../reducers/cartSlice'


export const Home = () => {
    const { cartItems } = useSelector((store) => store.cart)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchData())
        dispatch(showCartPost())
    }, [dispatch])

    const showPosts = cartItems.map(post => <Cart {...post} key={post.id} />)
    return (
        <>
            <div className="container">


                {showPosts}

            </div >
        </>
    )
}
