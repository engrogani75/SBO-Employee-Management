import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { router } from './Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <QueryClientProvider client={queryClient}>
    <ThemeProvider>
     <RouterProvider router={router} />
    </ThemeProvider>
    </QueryClientProvider>

   
    </AuthProvider>
  </React.StrictMode>,
)
