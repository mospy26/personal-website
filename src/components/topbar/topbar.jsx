import React from 'react';

var resume = process.env.PUBLIC_URL + "docs/resume.pdf";

class TopBar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
            <div class="container">
              <a class="navbar-brand" href="index.html">M</a>
              <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="oi oi-menu"></span> Menu
              </button>
    
              <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav nav ml-auto">
                  <li class="nav-item"><a href="#home-section" class="nav-link"><span>Home</span></a></li>
                  <li class="nav-item"><a href="#about-section" class="nav-link"><span>About</span></a></li>
                  <li class="nav-item"><a href={ resume } class="nav-link"><span>Resume</span></a></li>
                  <li class="nav-item"><a href="#footer-section" class="nav-link"><span>Contact</span></a></li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default TopBar;