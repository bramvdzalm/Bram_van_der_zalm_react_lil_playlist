import React from 'react';
import './App.css';
import Header from './components/Header';
import SongOverview from './components/SongOverview'
import About from './components/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

        <Header/>
         
          <Routes>
            <Route path='/' element={<SongOverview/>}/>
            <Route path='/about' element={<About/>} />
          </Routes>
          
      </Router>

      </div>
      
    
    
  );
}

export default App;
