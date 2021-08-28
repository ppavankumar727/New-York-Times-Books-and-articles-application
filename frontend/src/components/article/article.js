import React from 'react';
import './article.css';
export class Article extends React.Component{
    render(){
    return (
        <div className="card" style={{width: '18rem'}} >
          <img src={this.props.image}  style={{width: '10rem'}} classname="card-img-top article-image" alt="article" />

            <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
              <a href={this.props.link} className="btn btn-primary">Article Link</a>
            </div>
        </div>
        );
      
    }
}
