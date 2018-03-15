import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {FooterStyles} from './../styles/footer.js';

export default class FooterNav extends Component {
  render() {
    return (
      <div>
        <div style={FooterStyles.mainDiv}>
          <div className="container">
            <div className="row">
              <div style={FooterStyles.borders} className="col-sm-4">
                <h6 style={FooterStyles.headerText}>IN THE NEWS</h6>
                <p style={FooterStyles.pText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat justo nisl, ullamcorper sollicitudin nisl pretium a. In aliquam vel leo sed suscipit.</p>
                <p style={FooterStyles.pText}>Cras vulputate eget elit eget rutrum. Phasellus ornare bibendum ipsum, quis scelerisque ante rhoncus eu. Suspendisse eu suscipit elit. Curabitur a consequat nisl. In nec mattis tellus, et efficitur mauris.</p>
              </div>
              <div style={FooterStyles.borders} className="col-sm-4">
                <h6 style={FooterStyles.headerText}>CONTACT US</h6>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.3891296352313!2d-74.6026788844428!3d40.77545857932499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3989b95346329%3A0xa4589944f31f2ef7!2sDiSabato+%26+Bouckenooghe+LLC!5e0!3m2!1sen!2sus!4v1519579883339"></iframe>
                <p style={FooterStyles.pText}>4 Hilltop Road, Mendham, New Jersey 07945</p>
                <p style={FooterStyles.pText}>973-813-2525  <span style={FooterStyles.lineColor}>l</span>  ddisabato@disabatolaw.com</p>
              </div>
              <div style={FooterStyles.connectBorders} className="col-sm-4">
                <h6 style={FooterStyles.headerText}>CONNECT WITH US</h6>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-2">
                      <img style={FooterStyles.socialLogos} src="./images/Twitter-white-icon.png"/>
                    </div>
                    <div className="col-sm-2">
                      <img style={FooterStyles.socialLogos} src="./images/facebook_logo_white.png"/>
                    </div>
                  </div>
                </div>
                <p style={FooterStyles.pText}><strong>DiSabato & Bouckenooghe LLC</strong></p>
                <p style={FooterStyles.pText}>Content copyright 2018. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
