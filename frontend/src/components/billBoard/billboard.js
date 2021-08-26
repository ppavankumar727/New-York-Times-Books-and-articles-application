import React from 'react';

export class BillBoard extends React.Component{
    render(){
        return (
            <section className="highlight-phone" style={{background: 'rgb(113,216,186)'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="intro">
                    <h2>Move Beyond The Limitations Of ELearning</h2>
                    <p className="text-body">Anytime Anywhere To Discover Yourself</p><a className="btn btn-primary btn-sm d-inline-block" role="button" href="#">Get Started</a>
                    <h6 className="d-inline-block">&nbsp; &nbsp; Become An Instructor</h6>
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
