import React from 'react';
import './App.css';
import MessageContainer from './components/MessageContainer';
import MainRouters from './routers/MainRouters';

function App() {
  return (
    <div className="App">
      <MessageContainer />
      <MainRouters />
    </div>
  );
}

export default App;
