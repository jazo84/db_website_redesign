import React, {Component} from 'react';
import { render } from 'react-dom';
import {HomeStyles} from '../styles/home-styles.js';
import HomeNav from '../navs/home-nav';
import FooterNav from '../navs/footer';
import {AboutusStyles} from '../styles/about-us-styles.js';


export default class Home extends Component {
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
        <div style={AboutusStyles.header}className="container">
          <div className="row">
            <div className="col-sm-12">
              About us
            </div>
          </div>
        </div>
        <FooterNav />
      </div>
    );
  }
};
