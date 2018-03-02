import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {HomeStyles} from './../styles/home-styles.js';

export default class HomeNav extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
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
            <img style={HomeStyles.dbLogo}src="./images/db_logo_temp.png" />
          </div>
          <div style={HomeStyles.navText} className="col-sm-4">
            <h5 style={HomeStyles.navText}><span style={HomeStyles.navColor}>DiSabato & Bouckenooghe LLC</span></h5>
            <p>Attorneys-at-Law</p>
          </div>
          <div className="col-sm-3">
          </div>
          <div style={HomeStyles.navText} className="col-sm-1">
            <a href="#modal1">
              <div className="hamburger" data-toggle="modal" id="hamburger-1">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </a>
            <div>
             </div>
          </div>
          <div style={HomeStyles.navText} className="col-sm-1">
            <span><h6 style={HomeStyles.navText}>Menu</h6></span>
          </div>
          <div style={HomeStyles.navText} className="col-sm-1">
            <h6 style={HomeStyles.navText}>Login</h6>
          </div>
        </div>
      </div>
      <div id="modal1" className="modal">
        <div className="modal-content">
        <img style={HomeStyles.menuImage} src="./images/menu_hallsofjustice.jpg" />
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>
      </div>
    );
  }
};
