import React from "react";
import  './Foooter.scss'

const HomeFooter = () => (
  <footer className="page-footer font-small blue pt-4">
    <div
      className="container-fluid text-center text-md-left"
      style={{ backgroundColor: "#13232f" }}
    >
      <div className="row foootermain">
        <div className="col-md-6 mt-md-0 mt-3" >
          <h5>VpConfiar</h5>
          <p className="foooter-desc">Vee Pee’s Tower - 101 G Moothedam - 679331</p>
          <p  className="foooter-desc">Malappuram Kerala India</p>
          <p  className="foooter-desc"> Mobile: +91 9495137978 </p>
          <p  className="foooter-desc"> Email: info@vpconfiar.com</p>
          
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        {/* <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p>
            <i className="fa fa-home me-2"></i>
            New York, NY 10012, US
          </p>
          <p>
            <i className="fa fa-envelope me-3"></i>
            info@example.com
          </p>
          <p>
            <i className="fa fa-phone me-3"></i> + 01 234 567 88
          </p>
          <p>
            <i className="fa fa-print me-3"></i> + 01 234 567 89
          </p>
        </div> */}
      </div>
    </div>

    <div
      className="footer-copyright text-center py-3"
      style={{ backgroundColor: "#13232f" }}
    >
      {/* © 2020 Copyright: */}
      <p>VP CONFIAR HEALTH INTERNATIONAL PRIVATE LIMITED </p>
    </div>
  </footer>
);

export default HomeFooter;
