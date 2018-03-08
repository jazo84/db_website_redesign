import React, {Component} from 'react';
import { render } from 'react-dom';
import {ContactUsStyles} from '../styles/contact-us-styles.js';
import HomeNav from '../navs/home-nav';
import FooterNav from '../navs/footer';

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
      <div className="container">
        <div>
          <img style={ContactUsStyles.topImage} src="./images/header_contactus_cropped.jpg" />
        </div>
        <br/>
        <div className="row">
        <div>
          <p>DiSabato & Bouckenooghe LLC is located in the center of beautiful Mendham, New Jersey.  Tucked into the rolling hills of Morris County, Mendham is rich with Revolutionary War history and is home to our State’s current Governor and happens to be right up the road from the temporary "Summer White House" in Bedminster, New Jersey.</p>
          <p>Our office is in the Old Post Office building at 4 Hilltop Road, in the heart of Mendham’s Historic Business District.  Our doors are always open and we welcome you to come by to discuss any legal issues you may have, or just to visit and meet  us.</p>
          <p>They say that talk is cheap.  But with us, it's free.   We're happy to consult with you at no charge.  And remember,  many cases involve New Jersey or Federal statutes that require defendants to pay the consumer’s legal fees if the consumer prevails.  If you feel that you have a consumer grievance, please contact us.  We're here to answer any questions you have, and we may be able to handle your case at no cost to you.</p>
        </div>
        <div>
        <div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input id="first_name" type="text" class="validate"/>
        <label for="first_name">First Name</label>
      </div>
      <div className="input-field col s6">
        <input id="last_name" type="text" class="validate"/>
        <label for="last_name">Last Name</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s6">
        <input id="first_name" type="text" class="validate"/>
        <label for="first_name">Phone Number</label>
      </div>
      <div className="input-field col s6">
        <input id="email" type="email" class="validate"/>
        <label for="email">Email</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="password" type="password" class="validate"/>
        <label for="password">Address</label>
      </div>
    </div>
    <div className="row">
      <div class="input-field col s6">
        <input id="first_name" type="text" class="validate"/>
        <label for="first_name">City</label>
      </div>
      <div className="input-field col s6">
        <input id="email" type="email" class="validate"/>
        <label for="email">State</label>
      </div>
      <div className="input-field col s6">
        <input id="email" type="email" class="validate"/>
        <label for="email">Zip Code</label>
      </div>
    </div>
    <div className="row">
      <div class="input-field col s12">
        <input id="email" type="email" class="validate"/>
        <label for="email">Comments</label>
      </div>
    </div>
    <p>DISCLAIMER: By sending your email, you understand and agree that unless you are an existing client, information sent to the firm will not be considered confidential, may not receive a response, and does not create an attorney-client relationship with the firm. Do not include any confidential information in your message. Also, please note that our attorneys do not seek to practice law in any jurisdiction in which they are not properly authorized to do so.  That's it for the "fine print"!</p>
    <p>
      <input name="group1" type="radio" id="test1" />
      <label for="test1">I agree to the terms in the disclaimer*</label>
    </p>
    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
  </button>
  </form>
</div>
        </div>
      </div>
      </div>
      <FooterNav />
      </div>
    )
  }
}
