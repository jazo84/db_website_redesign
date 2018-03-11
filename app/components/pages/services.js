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
      <div style={ServicesStyles.cardHeight} className="card">
<div className="card-image waves-effect waves-block waves-light">
 <img style={ServicesStyles.cardImage} className="activator" src="/images/consumer_protection_temp.jpeg"/>
</div>
<div style={ServicesStyles.cardText} className="card-content">
 <span className="card-title activator grey-text text-darken-4">Consumer Fraud Act and Consumer Protection Actions<i className="material-icons right">expand_less</i></span>
</div>
<div className="card-reveal">
 <span  className="card-title grey-text text-darken-4">Consumer Fraud Act and Consumer Protection Actions<i className="material-icons right">close</i></span>
 <p>Cases in which consumers were cheated by products or services or mislead by fraudulent sales practices or deceptive advertising.</p>
</div>
</div>
</div>
        <div className="col-sm-4">
          <div style={ServicesStyles.cardHeight} class="card">
   <div className="card-image waves-effect waves-block waves-light">
     <img style={ServicesStyles.cardImage} className="activator" src="/images/data-breach-temp.jpg"/>
   </div>
   <div className="card-content">
     <span className="card-title activator grey-text text-darken-4">Data Breach and Privacy Actions<i className="material-icons right">expand_less</i></span>
   </div>
   <div className="card-reveal">
     <span className="card-title grey-text text-darken-4">Data Breach and Privacy Actions<i className="material-icons right">close</i></span>
     <p>Cases in which customers' personal information was stolen, exposed, sold or misused.</p>
   </div>
 </div>
        </div>
        <div className="col-sm-4">
        <div style={ServicesStyles.cardHeight} className="card">
  <div className="card-image waves-effect waves-block waves-light">
   <img style={ServicesStyles.cardImage} className="activator" src="/images/Wage-action_temp.jpg"/>
  </div>
  <div className="card-content">
   <span className="card-title activator grey-text text-darken-4">Wage and Hour Actions <i className="material-icons right">expand_less</i></span>
  </div>
  <div className="card-reveal">
   <span className="card-title grey-text text-darken-4">Wage and Hour Actions <i className="material-icons right">close</i></span>
   <p>Cases in which workers weren't paid what they deserve under the law.</p>
  </div>
  </div>
  </div>
      </div>
      <div className="row">
      <div className="col-sm-4">
      <div style={ServicesStyles.cardHeight} className="card">
<div className="card-image waves-effect waves-block waves-light">
 <img style={ServicesStyles.cardImage} className="activator" src="/images/robocalls-temp.jpg"/>
</div>
<div className="card-content">
 <span className="card-title activator grey-text text-darken-4">Robocall and Debt Collection Harassment <i className="material-icons right">expand_less</i></span>
</div>
<div className="card-reveal">
 <span className="card-title grey-text text-darken-4">Robocall and Debt Collection Harassment<i className="material-icons right">close</i></span>
 <p>Cases in which phone and text solicitations or collection calls or correspondence violate the protections of the TCPA or the FDCPA.</p>
</div>
</div>
</div>
        <div className="col-sm-4">
          <div style={ServicesStyles.cardHeight} className="card">
   <div className="card-image waves-effect waves-block waves-light">
     <img style={ServicesStyles.cardImage} className="activator" src="/images/financial_fraud_temp.jpg"/>
   </div>
   <div className="card-content">
     <span className="card-title activator grey-text text-darken-4">Financial Fraud Actions<i className="material-icons right">expand_less</i></span>
   </div>
   <div className="card-reveal">
     <span className="card-title grey-text text-darken-4">Financial Fraud Actions<i className="material-icons right">close</i></span>
     <p>Cases involving predatory lending, servicing malfeasance or excessive fees.</p>
   </div>
 </div>
        </div>
        <div className="col-sm-4">
        <div style={ServicesStyles.cardHeight} className="card">
  <div className="card-image waves-effect waves-block waves-light">
   <img style={ServicesStyles.cardImage} className="activator" src="/images/personal_injury_temp.jpg"/>
  </div>
  <div className="card-content">
   <span className="card-title activator grey-text text-darken-4">Personal Injury Actions<i className="material-icons right">expand_less</i></span>
  </div>
  <div className="card-reveal">
   <span className="card-title grey-text text-darken-4">Personal Injury Actions<i className="material-icons right">close</i></span>
   <p>Cases in which individuals have been severely injured or killed due to the negligence of another.</p>
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
