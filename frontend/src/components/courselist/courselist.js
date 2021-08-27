import React from 'react';
import { Course } from '../course/course';

export class Courselist extends React.Component{
  constructor(props){
    super(props);
    this.state = {courseName:""};
    this.search =  this.search.bind(this);
    this.search();
  }
  search(){
    return fetch('/api/').then(res =>{
      if(res.ok){
        return res.json();
      }
    }).then(res=>{
      console.log(res);
      this.setState({courseName:res.hello})
    })
  }
    render(){
        return (
          <div className="album py-5 bg-light">
            <div className="container">
            <div className="row">
                <Course name = {this.state.courseName}>
                </Course>
                <Course name = {this.state.courseName}>
                </Course>
                <Course name = {this.state.courseName}>
                </Course>
            </div>
          </div>
          </div>
          );
      
    }
}
