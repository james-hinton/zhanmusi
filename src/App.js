import { useEffect, useState } from 'react';
import './assets/styles/App.css';
import Navbar from './components/Navbar'
import LeftContentBar from './components/LeftContentBar'
import RightContentBar from './components/RightContentBar'
import Footer from './components/Footer'

function App() {

  const [background, setBackground] = useState(null)

  useEffect(() => {
    if (background) {
      document.body.style.background = background
    }
  }, [background])
  
  return (
    <div className="app">

      <Navbar
        setBackground={setBackground}
      />

      <div className="content">
              <LeftContentBar
              
              />

              <RightContentBar

              />
      </div>

      <Footer />

    </div>
  );
}

export default App;
