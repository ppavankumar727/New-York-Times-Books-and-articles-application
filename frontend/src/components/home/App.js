import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar/navbar';
import { BillBoard } from '../billBoard/billboard';
import { Footer } from '../footer/footer';
import { Courselist } from '../courselist/courselist';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {booklist:[]};
    this.search = this.search.bind(this);
    this.search();
  }
  search(){
    return fetch('/booklist/').then(res =>{
      if(res.ok){
        return res.json();
      }
    }).then(res=>{
      console.log(res);
      this.setState({booklist:res})
    })
    }
  
  render(){
    return(
    <div className="root">
      <Navbar></Navbar>
      <BillBoard></BillBoard>
      <Courselist booklist={this.state.booklist}></Courselist>
      <Footer></Footer>
    </div>      
    );

  }
}

export default App;
