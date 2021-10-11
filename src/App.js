import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import LeftContentBar from './components/LeftContentBar'
import RightContentBar from './components/RightContentBar'


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

    </div>
  );
}

export default App;
