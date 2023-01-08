import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
          <Header />
          <div>
            <Route path='/' component={Home} exact />
          
            <Route path='/cart' component={Cart} exact/>
           
          </div>
    </BrowserRouter>
  );
}

export default App;
