import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

      return (
        <div className="App">
            <Welcome />
            <Welcome />
        </div>
    );
}

export default App
