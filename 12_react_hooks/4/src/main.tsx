import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'

import { AuthProvider } from './contexts/AuthContext/AuthProvider'
import { router } from './router'

const root = document.getElementById("root")

createRoot(root!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
