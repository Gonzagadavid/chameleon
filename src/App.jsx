import React from 'react';
import './App.css';
import MessageContainer from './components/MessageContainer';
import ScrollToTop from './components/ScrollToTop';
import MainRouters from './routers/MainRouters';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <MessageContainer />
      <MainRouters />
    </div>
  );
}

export default App;
