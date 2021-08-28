import React from 'react';
import { Article } from '../article/article';
export class Articlelist extends React.Component{
  constructor(props){
    super(props);
  }
    render(){
        return (
          <div className="album py-5 bg-light">
            <div className="container ">
            <div className="row" >
               <h2 className="col-6">Top ARticles</h2>
            </div>
            <div className="row">
                {this.props.articlelist && this.props.articlelist.map(article => {
                   return     <Article title={article.title} link={article.url} image={article.media[0]['media-metadata'][0].url}></Article>
                })} 
            </div>
           </div>
          </div>
          );
      
    }
}
