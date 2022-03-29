import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Welcome />
      </main>
    </div>
  );
}

export default App;
