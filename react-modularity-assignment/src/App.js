import React from 'react';
import './App.css'; 
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentA } from './components/ContentA'; 
import { ContentB } from './components/ContentB'; 
import { Button } from './components/SharedComponents';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentA />
      <ContentB />
      <Button onClick={() => console.log('I love Poems!')}>Click Me!</Button>
      <Footer />
    </div>
  );
}

export default App;
