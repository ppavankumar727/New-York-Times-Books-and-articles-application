import React from 'react';

export class Course extends React.Component{
    render(){
        return (
              <div className="col-md-3"><img className="flex-grow-0" src="assets/img/1778502_f4b9_12.jpg" width="150 rem" />
                <h4>{this.props.title}</h4>
                <h5>Author :{this.props.author}</h5>
              </div>
          );
      
    }
}
