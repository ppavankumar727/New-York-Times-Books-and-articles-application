import React from 'react';

export class BillBoard extends React.Component{
    render(){
        return (
            <section className="highlight-phone" style={{background: 'rgb(113,216,186)'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="intro">
                    <h2>New York Times</h2>
                    <p className="text-body">Discover New York's Finest Hours</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-none d-md-block phone-mockup"><img className="device" src="assets/img/83e8f763-8c2e-45a4-a4f7-f91fd48e500d.jpg" />
                    <div className="screen" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )    
}
}
