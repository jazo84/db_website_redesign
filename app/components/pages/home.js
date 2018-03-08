import React, {Component} from 'react';
import { render } from 'react-dom';
import {HomeStyles} from '../styles/home-styles.js';
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
      $('.carousel.carousel-slider').carousel({fullWidth: true, duration: 200});
    })
    setInterval(() => {
      $('.carousel').carousel('next');
    }, 3000)

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
        <div>
        <div style={HomeStyles.sliderContainer}className="container">
          <div className="row no gutters">
            <div className="col-sm-12">
            <div className="carousel carousel-slider center" data-indicators="true">
              <div className="carousel-fixed-item center">
              </div>
              <div  className="carousel-item" href="#one!">
                <img style={HomeStyles.sliderImage} className="w3-grayscale-max" src="./images/homepage_ppl_image1_cropped.jpg"/>
              </div>
              <div className="carousel-item" href="#two!">
                <img style={HomeStyles.sliderImage} className="w3-grayscale-max" src="./images/inthenews_header.jpg"/>
              </div>
              <div className="carousel-item" href="#three!">
                <img style={HomeStyles.sliderImage} className="w3-grayscale-max" src="./images/homepage_ppl_image1_cropped.jpg"/>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div className="container">
        <div style={HomeStyles.homeText}className="row no gutters">
          <div className="col-sm-4">
            <p>DiSabato & Bouckenooghe LLC is one of New Jersey’s premiere consumer protection law firms.  We represent consumers and small business and we specialize in matters involving consumer fraud, predatory lending, false advertising and deceptive and abusive business practices. </p>
          </div>
          <div className="col-sm-4">
            <p>We handle all manner of cases, from small individual claims to national class actions.  Our reputation as a leader in our field is second to none.  We practice on the cutting edge of the law and deliver winning results for our clients time after time.  Ours is a relentless pursuit of justice, no matter the odds. </p>
          </div>
          <div style={HomeStyles.nacaLogo} className="col-sm-4">
            <img src="./images/NACA_logo.jpg"/>
          </div>
        </div>
      </div>
      <FooterNav />
      </div>
    );
  }
};
