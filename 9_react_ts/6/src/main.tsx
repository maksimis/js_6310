import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

import App from './App'
import { NotFound } from './pages/NotFound'

const root = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
])

createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
