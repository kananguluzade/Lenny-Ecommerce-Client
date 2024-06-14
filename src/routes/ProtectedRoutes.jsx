import React, { useContext } from 'react'
import { getUserData } from 'src/helper'
import {  Outlet } from 'react-router-dom';
import { modalContext } from "src/context/ModalProvider";

const ProtectedRoutes = () => {
    const { setIsModalOpen} = useContext(modalContext)
    const { jwt } = getUserData();
    return jwt ? <Outlet /> : setIsModalOpen(true);
}

export default ProtectedRoutes