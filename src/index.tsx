import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

import ProtectorModal from "./components/ProtectorList/NewProtectorModal/NewProtectorModal"
import ProtectorList from './components/ProtectorList/ProtectorList';
import Register from './components/Login/Register/Register';
import AssociateList from './components/AssociateList/AssociateList';
import SupplierList from './components/SupplierList/SupplierList';
import AssociateListPage from './Pages/AssociateListPage/AssociateListPage';
import SupplierListPage from './Pages/SupplierListPage/SupplierListPage';
import ProtectorListPage from './Pages/ProtectorListPage/ProtectorListPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/associates",
    element: <AssociateListPage />
  },
  {
    path: "/protectors",
    element: <ProtectorListPage />
  },
  {
    path: "/suppliers",
    element: <SupplierListPage />
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();