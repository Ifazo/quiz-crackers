import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Topics from './components/Topics/Topics';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header></Header>
    },
    {
      path: '/topics',
      element: <Topics></Topics>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
