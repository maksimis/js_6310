import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

const root = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
])

createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
