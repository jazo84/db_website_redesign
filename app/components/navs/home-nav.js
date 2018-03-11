import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {HomeStyles} from './../styles/home-styles.js';

export default class HomeNav extends Component {

  componentWillMount(){
    $(document).ready(function(){
      $('.modal').modal();
    })
  }
  render() {
    return (
      <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <a href="/"><img style={HomeStyles.dbLogo}src="./images/db_Logo.png" /></a>
          </div>
          <div style={HomeStyles.navText} className="col-sm-6">
            <h5 style={HomeStyles.navText}><span style={HomeStyles.navColor}>DiSabato & Bouckenooghe LLC</span></h5>
            <p>Attorneys-at-Law</p>
          </div>
          <div className="col-sm-2">
          </div>
          <div style={HomeStyles.navText} className="col-sm-1">
            <a href="#modal1">
              <div className="hamburger" data-toggle="modal" id="hamburger-1">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </a>
          </div>
          <div style={HomeStyles.navText} className="col-sm-1">
            <h6 style={HomeStyles.navText}>Login</h6>
          </div>
        </div>
      </div>
      <div id="modal1" className="modal">
        <img style={HomeStyles.menuImage} src="./images/menu_hallsofjustice.jpg" />
        <div style={HomeStyles.menuContainer}>
          <div className="row no-gutters">
             <div style={HomeStyles.menuRowTop} className="col-sm-4 menu-hover">
              <a href="/aboutus">
                <div style={HomeStyles.colStyle}>
                <p id="aboutPTag" style={HomeStyles.pTag}>ABOUT US</p>
                </div>
              </a>
            </div>
            <div style={HomeStyles.menuRowTop} className="col-sm-4 menu-hover"><a href="/services">
            <div style={HomeStyles.colStyle}>
            <p style={HomeStyles.pTag}>SERVICES</p>
            </div>
            </a></div>
            <div style={HomeStyles.menuRightCol} className="col-sm-4 menu-hover"><a href="/inthenews">
            <div style={HomeStyles.colStyle}>
            <p style={HomeStyles.pTag}>IN THE NEWS</p>
            </div>
            </a></div>
          </div>
          <div id="bottomRow" className="row no-gutters mt-0">
            <div style={HomeStyles.menuRowBottom}className="col-sm-4 menu-hover"><a href="/cases-alerts">
            <div style={HomeStyles.colStyle}>
            <p style={HomeStyles.pTag}>CASES & ALERTS</p>
            </div>
            </a></div>
            <div style={HomeStyles.menuRowBottom}className="col-sm-4 menu-hover"><a href="/blog">
            <div style={HomeStyles.colStyle}>
            <p style={HomeStyles.pTag}>BLOG</p>
            </div>
            </a></div>
            <div style={HomeStyles.menuRightCol2} className="col-sm-4 menu-hover"> <a href="/contact-us">
            <div style={HomeStyles.colStyle}>
            <p style={HomeStyles.pTag}>CONTACT US</p>
            </div>
            </a></div>
          </div>
        </div>
        {/* <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat"><button>Close</button></a>
        </div> */}
      </div>

      </div>
    );
  }
};
