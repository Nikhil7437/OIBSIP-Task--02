
import './App.css';

import './style/designing.css'
import Home from './components/Home';
import Highlight from './components/Highlight';
import About from './components/About';
import Works from './components/Works';
import Biography from './components/Biography';
import Footer from './components/Footer';

function App() {
  return (
   <div className='hero' >

  <Home/>
  <Highlight/>
  <About/>
  <Works/>
  <Biography/>
  <Footer/>
   </div>
  );
}

export default App;
