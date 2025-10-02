import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Home from './Components/Home/Home.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'


const router = createBrowserRouter([{
  path: '/',
  Component: Root,
  children: [
    {index: true, Component: Home},
    {path: 'mobiles', Component: Mobiles},
    {path: 'laptops', Component: Laptops}
  ]
},
{
  path: 'about',
  element: <div>About Me Here</div>
},
{
  path: "blogs",
  element: <div>All Blogs are Here</div>
},
{
  path: 'app',
  Component: App
},
{
  path: '/app2',
  element: <App></App>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
