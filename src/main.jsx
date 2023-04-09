import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Layout/Home';
import Jobs from './Component/Jobs/Jobs';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog'


const router = createBrowserRouter([

  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'jobs',
        element: <Jobs></Jobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
