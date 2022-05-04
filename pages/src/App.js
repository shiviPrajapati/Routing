import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <BrowserRouter>
        <div>
          <header className='navbar'>
            <ul>
              <li>
                <Link className='link' to = '/'>Home</Link>
              </li>
              <li>
                <Link className='link' to = '/About'>About</Link>
              </li>
              <li>
                <Link className='link' to = '/Contact'>Contact</Link>
              </li>
            </ul>
          </header>
          
            <Routes>
              <Route exact path='/' element={<Home></Home>}></Route>
              <Route exact path='/About' element={<About></About>}></Route>
              <Route exact path='/Contact' element={<Contact></Contact>}></Route>
            </Routes>  
        </div>

      </BrowserRouter>
  );
}

export default App;
