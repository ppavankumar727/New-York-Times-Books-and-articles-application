import React from 'react';

export class Course extends React.Component{
    render(){
        return (
<div className="card" style={{width: '18rem'}}>
<div className="card-body">
  <h5 className="card-title">{this.props.title}</h5>
  <p className="card-text">Author :{this.props.author}</p>
</div>
</div>
          );
      
    }
}
