import React from 'react';
import Login from '../Pages/Login/Login';
import Layout from '../Pages/layout/Layout';
import { Route, Routes } from 'react-router-dom';

const Index = () => {
    return (
        <Routes>
            <Route path='*' element={<Layout ></Layout>} />
            <Route path='/login' element={<Login></Login>} />
        </Routes>
    );
}
export default Index;