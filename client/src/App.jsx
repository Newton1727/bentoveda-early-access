import React from 'react'
import Home from '../pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from '../pages/Admin';
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Home/>

    },
    {
      path : "/admin",
      element : <Admin/>
    }
  ])
  return (
    <div>
        
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App