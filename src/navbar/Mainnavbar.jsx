import React from 'react'
import { Outlet } from "react-router-dom";
import Navlink from './Navlink';

const Mainnavbar = () => {
  return (
    <>
      <div>
        <Navlink />
        <Outlet />
      </div>
    </>
  )
}

export default Mainnavbar