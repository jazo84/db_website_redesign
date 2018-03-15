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
      posts: []
    }
  }
  componentDidMount(){
    $(document).ready(function(){
      $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
      });
    });
    fetch('/api/blog', {
    headers: {
              'content-type': 'application/json',
              'accept': 'application/json'
          }
  }).then((response) => response.json())
      .then((results) => {
          console.log(results)
          this.setState({
            posts: results
          })
      });
  }
  render() {
    const appendPosts =()=> {
      return this.state.posts.map((posts)=>{
        return(
          <div className="row">
          <div className="col-sm-2">
          <div style={BlogStyles.imageIcon} className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={posts.image}/>
            </div>
          </div>
          </div>
            <div className="col-sm-10">
            <div style={BlogStyles.imageIcon} className="card">
              <div className="card-image waves-effect waves-block waves-light">
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{posts.title}<i class="material-icons right">expand_less</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                <p>{posts.description}</p>
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
        {appendPosts()}
      </div>
      <br/>
      <FooterNav />
      </div>
    )
  }
}
