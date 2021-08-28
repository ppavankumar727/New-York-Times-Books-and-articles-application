import React from 'react';

export class Navbar extends React.Component{
    render(){
        return (

            <header>
              <nav className="navbar navbar-light navbar-expand-md bg-warning">
                <div className="container-fluid"><a className="navbar-brand" href="#"><img src="assets/img/e-learning.png" width={30} />&nbsp;e-Learning</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                  <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav">
                      <li className="nav-item"><a className="nav-link active" href="#">About</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Courses</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Instructor</a></li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item text-end text-sm-end text-md-end text-lg-end text-xl-end"><button className="btn btn-info btn-sm" type="button">Search</button><button className="btn btn-primary btn-sm" type="button">Login/Signup</button></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
          );
      
    }
}
