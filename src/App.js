import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Error from './components/Error';
import Main from '../src/outlet/Main';
import Statistics from './components/Statistics';
import Topics from './components/Topics';
import Home from './components/Home';
import QuizDetails from './components/QuizDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
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
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/quiz/:id',
          element: <QuizDetails></QuizDetails>,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
