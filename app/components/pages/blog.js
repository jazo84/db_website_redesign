import React, {Component} from 'react';
import { render } from 'react-dom';
import {BlogStyles} from '../styles/blog-styles.js';
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
      <div style={BlogStyles.header} className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>Consumer Protection Blog</p>
          </div>
        </div>
      </div>
      <br/>
      <div className="container">
        <div className="row">
          <img style={BlogStyles.topImage} src="./images/blog_header_cropped.jpg" className="w3-grayscale-max"/>
        </div>
        <p>DiSabato & Bouckenooghe LLC is a full service law firm. We have broad experience in a wide range of areas including contractual disputes, employment issues, whistleblower actions, injury claims and personal bankruptcy.  In our core consumer protection practice, however, we specialize in both individual and class action consumer claims, particularly those relating to:</p>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-sm-3">
          One of three columns
        </div>
        <div className="col-sm-9">
          One of three columns
        </div>
      </div>
    </div>
      <br/>
      <FooterNav />
      </div>
    )
  }
}
