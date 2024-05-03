
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Todos from './pages/Todos';
import './App.css';
import Root from './components/root';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [{
        path: "/",
        element: <Home />
      }, {
        path: "/About",
        element: <About />
      }, {
        path: "/Todos",
        element: <Todos />
      }]
    }
  ])




function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
