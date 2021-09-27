import React from 'react'

function Footer() {
  return (
    <div class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About Us</h6>
          <p style={{fontSize:'20px', color:'white'}}>Coccinella Digi-Mark helps leading brands find, reach, and engage customers, anywhere in the world.</p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Service</h6>
          <p>We Offer</p>
          <ul class="footer-links">
              <li style={{ color:'white',fontSize:'15px'}}>Brand Positioning + Messaging </li>
              <li style={{ color:'white',fontSize:'15px'}}>Website Design + Development </li>
              <li style={{ color:'white',fontSize:'15px'}}> SEO + SEM + Digital Advertising </li>
              <li style={{ color:'white',fontSize:'15px'}}>Content Strategy  Developments </li>
              <li style={{ color:'white',fontSize:'15px'}}>Marketing Campaigns </li>
              <li style={{ color:'white',fontSize:'15px'}}> Infographics + Data Visualization</li>
              <li style={{ color:'white',fontSize:'15px'}}> Design</li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li style={{color:'white',fontSize:'15px'}}><a href="/">About Us</a></li>
            <li style={{ color:'white',fontSize:'15px'}}><a href="/">Service</a></li>
            <li style={{ color:'white',fontSize:'15px'}}><a href="/">Expert</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
      <div class="footer-copyright #e6e600">
            <p style={{justifyContent:'center',fontSize:'20px',color:'white'}}>© 2021 Copyright Text</p>
      </div>
      </div>
    </div>
</div>
  )
}
export default Footer;



