import React from 'react';
import "./components/styles/App.css";
import Header from './components/Header'
import Middle from './components/Middle';

class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <Header/>
        <Middle/>
      </div>
    )
  }
}

export default App;