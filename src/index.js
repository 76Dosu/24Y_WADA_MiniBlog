import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'

import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<MainPage />}></Route>
            <Route path="write" element={<PostWritePage />}></Route>
            <Route path="post/:id" element={<PostViewPage />}></Route>
        </Routes>
    </BrowserRouter>
);
