import React from 'react';
import { Course } from '../course/course';

export class Courselist extends React.Component{
  constructor(props){
    super(props);
  }

    render(){
        return (
          <div className="album py-5 bg-light">
            <div className="container">
            <div className="row" >
               <h1 className="col-6">Top books</h1>
               <input className="form-control-sm ms-auto" type="search" />
            </div>
            <div className="row">
                {this.props.booklist && this.props.booklist.map(course => {
                  return <Course title={course.book_details[0].title} author={course.book_details[0].author}>
                  </Course>
                })} 
            </div>
          </div>
          </div>
          );
      
    }
}
