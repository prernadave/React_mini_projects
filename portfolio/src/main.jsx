import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './Layout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Skills from './components/Skills.jsx'
import App from './App.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "skills",
//         element: <Skills />,
//       },
//       {
//         path: "project",
//         element: <Project />
//       },
//       {
//         path: "contact",
//         element: <Contact />

//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
)
