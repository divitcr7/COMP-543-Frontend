import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {isLoggedIn} from './auth';  // 确保路径正确

const ProtectedRoute = ({children}) => {
  const location = useLocation();

  console.log("isLoggedIn boolean:", isLoggedIn());

  if (!isLoggedIn()) {
    // 如果用户未登录，重定向到登录页面，并传递当前位置，以便登录后可以返回
    return <Navigate to="/" state={{from: location}} replace/>;
  }

  return children;
};

export default ProtectedRoute;
