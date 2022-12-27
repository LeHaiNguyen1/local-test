import './App.css';
import Navbar from './components/Navbar';
import Redeem from './components/About';
import Footer from './components/footer';
import Caro from './components/Caro';
import Lobby from './components/Lobby';
import { RouterProvider,createBrowserRouter, BrowserRouter , Routes, Route, Form } from 'react-router-dom';
import Flapbird from './components/Flapbird';
import Bubbles from './components/Bubbles';
import Goldegg from './components/Goldegg';
import Therock from './components/Therock';

const router = createBrowserRouter([
  {
    path: "/caro",
    element: <Caro />,
  },
  {
    path: "/lobby",
    element: <Lobby />,
  },
  {
    path: "/flapbird",
    element: <Flapbird />,
  },
  {
    path: "/bubbles",
    element: <Bubbles />,
  },
  {
    path: "/goldegg",
    element: <Goldegg />,
  },
  {
    path: "/therock",
    element: <Therock />,
  },
]);


function App() {
  return (
    <>
    
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Redeem />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default App;
