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
                      <li className="nav-item"><a className="nav-link inactive" href="#">Courses</a></li>
                      <li className="nav-item"><a className="nav-link inactive" href="#">Instructor</a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
          );
      
    }
}
