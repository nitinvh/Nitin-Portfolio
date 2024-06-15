import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx';
import DetailView from './components/eperience/DetailView.jsx';
import MyNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ProjectDetailView from './components/projects/ProjectDetailView.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/experience-detail-view',
    element: <>
      <MyNavbar />
      <DetailView />
      <Footer />
    </>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/project-detail-view',
    element: <>
      <MyNavbar />
      <ProjectDetailView />
      <Footer />
    </>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
