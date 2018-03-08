import React, {Component} from 'react';
import { render } from 'react-dom';
import {ServicesStyles} from '../styles/services-styles.js';
import HomeNav from '../navs/home-nav';
import FooterNav from '../navs/footer';
import {FooterStyles} from '../styles/footer.js';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  componentDidMount(){
    $(document).ready(function(){
      $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
      });
    });
  }
  render() {
    return (
      <div>
      <HomeNav />
      <div style={ServicesStyles.header} className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>SERVING OUR CLIENTS</p>
          </div>
        </div>
      </div>
      <br/>
      <div className="container">
        <div className="row">
          <img style={ServicesStyles.topImage} src="./images/services_header.jpg" />
        </div>
        <p>DiSabato & Bouckenooghe LLC is a full service law firm. We have broad experience in a wide range of areas including contractual disputes, employment issues, whistleblower actions, injury claims and personal bankruptcy.  In our core consumer protection practice, however, we specialize in both individual and class action consumer claims, particularly those relating to:</p>
      </div>

      <br/>
      <div style={ServicesStyles.container} className="container">
      <div className="row">
        <div className="col-sm-4">
          <div style={ServicesStyles.cardOne} className="card blue-grey darken-1">
            <div className="card-content black-text">
              <span className="card-title">Consumer Fraud Act and Consumer Protection Actions</span>
                <div style={ServicesStyles.overlay}>
                <div style={ServicesStyles.cardText}>Hello World</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div style={ServicesStyles.card} className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Data Breach and Privacy Actions</span>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div style={ServicesStyles.card} className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Wage and Hour Actions</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div style={ServicesStyles.card} className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Robocall and Debt Collection Harassment</span>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div style={ServicesStyles.card} className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Financial Fraud Actions</span>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div style={ServicesStyles.card} className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Personal Injury Actions</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <FooterNav />
      </div>
    )
  }
}
