import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar/navbar';
import { BillBoard } from '../billBoard/billboard';
import { Footer } from '../footer/footer';
import { Courselist } from '../courselist/courselist';

class App extends React.Component{
  render(){
    return(
    <div className="root">
      <Navbar></Navbar>
      <BillBoard></BillBoard>
      <Courselist></Courselist>
      <Footer></Footer>
    </div>      
    );

  }
}

export default App;
