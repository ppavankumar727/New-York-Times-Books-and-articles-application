import React from 'react';
import { Course } from '../course/course';

export class Courselist extends React.Component{
    render(){
        return (
          <div className="album py-5 bg-light">
            <div className="container">
            <div className="row">
                <Course>
                </Course>
                <Course>
                </Course>
                <Course>
                </Course>
                <Course>
                </Course>
            </div>
          </div>
          </div>
          );
      
    }
}
