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
import Dream from './Component/Dream/Dream';
import Details from './Component/Details/Details';
import jobLoader from './Loaders/selectedJobs';



const router = createBrowserRouter([

  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Dream></Dream>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('assignment.json'),
      },
      {
        path: 'jobs',
        element: <Jobs></Jobs>,
        loader: jobLoader
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'details/:jobId',
        element: <Details></Details>,
        loader: () => fetch('details.json'),
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
