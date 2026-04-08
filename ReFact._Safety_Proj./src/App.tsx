import './App.css'
import Layout from './components/Layout/Layout';
import Homepage from './Pages/Page_home/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        index:true,
        element: <Homepage/>
      }
    ]
  }
]);

function App() {
  console.log('yeee')
  return <RouterProvider router={router} />
}

export default App