import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import AllRoutes from './AllRoutes';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux'
import store from '../store';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
          <QueryClientProvider client={queryClient}>
               <Provider store = {store}>
                    <AllRoutes />
               </Provider>
               <ReactQueryDevtools/>
          </QueryClientProvider>
     </BrowserRouter>
)
