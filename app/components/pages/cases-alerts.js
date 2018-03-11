import React, {Component} from 'react';
import { render } from 'react-dom';
import {CasesStyles} from '../styles/cases-alerts-styles.js';
import HomeNav from '../navs/home-nav';
import FooterNav from '../navs/footer';
import {FooterStyles} from '../styles/footer.js';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      descriptions: []
    }
  }
  componentDidMount(){
    $(document).ready(function(){
      $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
      });
    });
    fetch('/api/cases-alerts', {
    headers: {
              'content-type': 'application/json',
              'accept': 'application/json'
          }
  }).then((response) => response.json())
      .then((results) => {
          console.log(results)
          this.setState({
            descriptions: results
          })
      });
  }
  render() {
    const appendDescription =()=> {
      return this.state.descriptions.map((descriptions)=>{
        return(
          <div>
          <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{descriptions.title}</span>
                  <p>{descriptions.description}</p>
                </div>
                <div className="card-action">
                  <a href={descriptions.links}>Read More...</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{descriptions.title}</span>
                  <p>{descriptions.description}</p>
                </div>
                <div className="card-action">
                  <a href={descriptions.links}>Read More...</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{descriptions.title}</span>
                  <p>{descriptions.description}</p>
                </div>
                <div className="card-action">
                  <a href={descriptions.links}>Read More...</a>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        )
      })
    }
    return (
      <div>
      <HomeNav />
      <div style={CasesStyles.header}className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>Cases and Alerts</p>
          </div>
        </div>
      </div>
      <br/>
      <div className="container">
        <div className="row">
          <img style={CasesStyles.topImage} src="./images/cases_header_cropped.jpg" />
        </div>
        {appendDescription()}
        <p>We pride ourselves on staying at the vanguard of consumer law. We take interesting and novel cases that occasionally get noticed by the media.  We are also deeply committed to serving our local community and the world which we all share.  Please take some time to peruse some of our press mentions, our current noteworthy cases and some of the other things in which we are involved.  If you'd like to learn more and stay in touch with what we're doing, please e-mail us, follow us on Twitter or like us on Facebook.</p>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
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
