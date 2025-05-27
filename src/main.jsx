import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Lists from './Pages/ListsPage.jsx'
import ListPage from './Pages/ListPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/lists",
    element: <Lists />
  },
  {
    path: "/list/:id",
    element: <ListPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
