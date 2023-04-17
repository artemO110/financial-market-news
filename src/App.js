import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Post } from './components/Post';

import './App.css';

export const App = () => {
  return (
    <>
      {<Header />}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/post/:postId' element={<Post />} />
      </Routes>
    </>
  )
}