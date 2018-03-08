import React, {Component} from 'react';
import { render } from 'react-dom';
import {HomeStyles} from '../styles/home-styles.js';
import HomeNav from '../navs/home-nav';
import FooterNav from '../navs/footer';
import {AboutusStyles} from '../styles/about-us-styles.js';


export default class Home extends Component {
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
        <div style={AboutusStyles.header}className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>WHO WE ARE</p>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
        <div className="row">
        <div className="col-sm-12">
        <div>
        <p>Consumers, employees and small businesses are the lifeblood of this Country.  Yet these are the groups that are most marginalized by today's corporate culture.  These are the people that we represent.  We believe that people come first and that individual rights are far more important than corporate rights.</p>
        </div>
        </div>
        </div>
        </div>
        <div style={AboutusStyles.headshotDiv} className="container">
        <div className="row">
        <div className="col-sm-4">
        <img style={AboutusStyles.headshots} src="./images/dave_headshot_cropped.jpg" />
        </div>
        <div className="col-sm-8">
        <div>
        <h4>David J. DiSabato</h4>
        <p>Dave concentrates his practice in consumer protection law and is recognized as one of New Jersey’s top consumer class action attorneys.  He has been appointed lead class counsel in dozens of consumer-related class actions and has represented consumers throughout the Country in Multi-District Litigations.  Dave’s cases have been featured in the New Jersey Law Journal and he has been quoted by MSNBC, Trial Magazine, Law 360, Yahoo Finance and various other news sources across New Jersey.  Dave has also been a guest on News 12 New Jersey, speaking on consumer issues and forced arbitration.</p>
        <p>He is an active member of the National Association of Consumer Advocates and of the American Association for Justice.  Dave is a graduate of Tufts University and the Boston University School of Law.</p>
        </div>
        </div>
        </div>
        </div>
        <br/>
        <div style={AboutusStyles.headshotDiv} className="container">
        <div className="row">
        <div className="col-sm-8">
        <div>
        <h4>Lisa R. Bouckenooghe</h4>
        <p>Lisa devotes her practice to representing consumers in cases involving violations of State and Federal consumer protection laws.  She has represented victims of consumer fraud in dozens of class actions and has been appointed as lead class counsel by several Courts across New Jersey.  Lisa has successfully represented consumers in actions against the world’s largest fast food restaurant company, the Country’s largest wireless service provider and one of the Nation’s largest global consumer credit reporting agencies.</p>
        <p>Lisa has appeared on ABC News in connection with a class action involving the car rental industry and on News 12 New Jersey, where she spoke about fraudulent billing practices in the wireless industry.  She is a member of the National Association of Consumer Advocates and the American Association for Justice. She is Treasurer of the Worrall F. Mountain Inn of Court and serves on the District XB Ethics Committee. Lisa is a graduate of Rutgers College and Seton Hall University School of Law.</p>
        </div>
        </div>
        <div className="col-sm-4">
        <div>
        <img style={AboutusStyles.headshots} src="./images/lisa_headshot_cropped.jpg" />
        </div>
        </div>
        </div>
        </div>
        <div>
        <p style={AboutusStyles.lastPTag}>FIND OUT MORE ABOUT OUR SERVICES</p>
        </div>
        <FooterNav />
      </div>
    );
  }
};
