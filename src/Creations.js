import React, { Component } from 'react';
import logo from './logo.svg';
import './Creations.css';
import { BrowserRouter, Route } from 'react-router-dom';
import $ from 'jquery'


class Creations extends Component {
  render() {
    return (
      <html>
        <div id="contentD">
          <h1 id="headerD" className="hvr-sweep-to-right">My Creations</h1>
          <p id="dinfo">The last thing I'd like to talk about is some of the things I've made. I included a couple of these
          projects below. You can click on them to see more. I have made the code available for some. I have
          restricted others to respect collaboration policies. You can request the code for any however if you'd like
          to see it.  </p>
          <div id="cards">
            <a href=""><div className="card">
              <img src={require('./resources/Linux-Shell.png')} />
              <div className="container">
                <h2><b>Shell</b></h2>
                <p className="cardinfo">A program that emulates the bash shell. Runs inside the bash shell and executes bash commands. Written in C.</p>
              </div>
            </div></a>
            <a href="http://tundraboygames.com/risk"><div className="card">
              <img src={require('./resources/risk_nobg.png')} />
              <div className="container">
                <h2><b>Risk</b></h2>
                <p className="cardinfo">The classic board game implemented as a web application.  Also one of my favorite games. Click to play it. See my <a href="https://github.com/seifertben/Risk">github account</a> for code.</p>
              </div>
            </div></a>
            <a href=""><div className="card">
              <img src={require('./resources/fitbit_nobg.png')} />
              <div className="container">
                <h2><b>Buddy</b></h2>
                <p className="cardinfo">Second place corporate Hackathon project that helps children manage chronic diseases.</p>
              </div>
            </div></a>
          </div>

          <div id="mobilecards">
            <a href=""><div className="card">
              <img src={require('./resources/Linux-Shell.png')} />
              <div className="container">
                <h2><b>Shell</b></h2>
                <p className="cardinfo">A program that emulates the bash shell. Runs inside the bash shell and executes bash commands. Written in C.</p>
              </div>
            </div></a>
            <a href="http://tundraboygames.com/risk"><div className="card">
              <img src={require('./resources/risk_nobg.png')} />
              <div className="container">
                <h2><b>Risk</b></h2>
                <p className="cardinfo">The classic board game implemented as a web application. Also one of my favorite games.</p>
              </div>
            </div></a>
            <a href=""><div className="card">
              <img src={require('./resources/fitbit_nobg.png')} />
              <div className="container">
                <h2><b>Buddy</b></h2>
                <p className="cardinfo">Second place corporate Hackathon project that helps children manage chronic diseases.</p>
              </div>
            </div></a>
          </div>

                    
        </div>
      </html>
    );
  }
  componentDidMount() {
    $( "#headerD" ).click(function() {
      document.getElementById("contentD").scrollIntoView();
    });
  } 
  
}

export default Creations
