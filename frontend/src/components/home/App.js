import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar } from '../navbar/navbar';
import { BillBoard } from '../billBoard/billboard';
import { Footer } from '../footer/footer';
import { Courselist } from '../courselist/courselist';
import { Articlelist } from '../articleList/articlelist';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {booklist:[],articlelist:[]};
    this.search = this.search.bind(this);
    this.search2 = this.search2.bind(this);
    this.search();
    this.search2();
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
  search2(){
    return fetch('/articles/').then(res =>{
      if(res.ok){
        return res.json();
      }
    }).then(res=>{
      console.log(res);
      this.setState({articlelist:res})
    })
  }  
  render(){
    return(
    <div className="root">
      <Navbar></Navbar>
      <BillBoard></BillBoard>
      <Courselist booklist={this.state.booklist}></Courselist>
      <Articlelist articlelist={this.state.articlelist}></Articlelist>
      <Footer></Footer>
    </div>      
    );

  }
}

export default App;
