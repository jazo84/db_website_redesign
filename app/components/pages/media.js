import React, {Component} from 'react';
import { render } from 'react-dom';
import {MediaStyles} from '../styles/media-styles.js';
import HomeNav from '../navs/home-nav';
import FooterNav from '../navs/footer';
import {FooterStyles} from '../styles/footer.js';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount(){
    $(document).ready(function(){
      $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
      });
    });
    fetch('/api/inthenews', {
    headers: {
              'content-type': 'application/json',
              'accept': 'application/json'
          }
  }).then((response) => response.json())
      .then((results) => {
          console.log(results)
          this.setState({
            articles: results
          })
      });
  }
  render() {
    const appendArticles =()=> {
      return this.state.articles.map((articles)=>{
        return(
          <div className="row">
          <div className="col-sm-2">
          <div style={MediaStyles.imageIcon} className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={articles.image}/>
            </div>
          </div>
          </div>
            <div className="col-sm-10">
            <div style={MediaStyles.imageIcon}className="card">
              <div className="card-image waves-effect waves-block waves-light">
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{articles.title}<i class="material-icons right">expand_less</i></span>
                <p><a href={articles.links}>Additional Information</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                <p>{articles.press_mentions}</p>
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
      <div style={MediaStyles.header}className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>IN THE NEWS</p>
          </div>
        </div>
      </div>
      <br/>
      <div className="container">
        <div className="row">
          <img style={MediaStyles.topImage} src="./images/inthenews_header.jpg" />
        </div>
        <p>We pride ourselves on staying at the vanguard of consumer law. We take interesting and novel cases that occasionally get noticed by the media.  We are also deeply committed to serving our local community and the world which we all share.  Please take some time to peruse some of our press mentions, our current noteworthy cases and some of the other things in which we are involved.  If you'd like to learn more and stay in touch with what we're doing, please e-mail us, follow us on Twitter or like us on Facebook.</p>
        {appendArticles()}
      </div>
      <FooterNav />
      </div>
    )
  }
}
