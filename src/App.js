import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import Signin from './screens/Signin';
import Registration from './screens/Registration';
import Shorten from './screens/Shorten';
import Account from './screens/Account';
import Home from './screens/Home';
import Urls from './screens/Urls';
import Shortened from './screens/Shortened';


function App() {
  return (
    <Routes>
      <Route path = '/' element = {< Signin/>} />
      <Route path = '/registration' element = {<Registration/>} />
        <Route path="/shorten" element={
            <ProtectedRoute>
                <Shorten />
            </ProtectedRoute>}
        />
        <Route path="/home" element={
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>}
        />
        <Route path="/urls" element={
            <ProtectedRoute>
                <Urls />
            </ProtectedRoute>}
        />
        <Route path="/shortened" element={
            <ProtectedRoute>
                <Shortened />
            </ProtectedRoute>}
        />
        <Route path="/account" element={
            <ProtectedRoute>
                <Account />
            </ProtectedRoute>}
        />
      <Route />
      <Route />
    </Routes>
  );
}

export default App;
