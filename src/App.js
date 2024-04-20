import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRouteList from './components/ProtectedRouteList';

import Signin from './screens/Signin';
import Registration from './screens/Registration';
import Shorten from './screens/Shorten';
import Account from './screens/Account';
import Home from './screens/Home';
import Shortened from './screens/Shortened';
import AllShortenedURLs from './screens/AllShortenedURLs';
import Profile from './screens/Profile';
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
         <Route path="/all-urls" element={
            <ProtectedRouteList>
                <AllShortenedURLs />
            </ProtectedRouteList>}
        />
        <Route path="/profile" element={
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>}
        />
      <Route />
      <Route />
    </Routes>
  );
}

export default App;
