import React from 'react'
import { getUserData } from 'src/helper'
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes = () => {
    const { jwt } = getUserData();

    return !jwt ? <Outlet /> : <Navigate to="/" />;
}

export default AuthRoutes