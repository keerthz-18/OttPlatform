import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <div>
       <h1>Welcome!!!</h1>
        <outlet/>
    </div>
  );
}

export default Layout