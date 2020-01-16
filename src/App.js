import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
// import Logo from './components/Logo'
import Layout from './components/Layout'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
        <Layout/>
          <Footer fixed="bottom" />
    </div>
  );
}

export default App;
