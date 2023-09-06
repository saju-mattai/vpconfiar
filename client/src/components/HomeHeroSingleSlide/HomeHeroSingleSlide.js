import React from "react";
import { Link } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext";

const HomeHeroSingleSlide = ({ bg_className }) => {
  const videoPopup = useGlobalContext();
  const { setIsOpen } = videoPopup;
  return (
    <>
      <div 
        className={`single-slider slider-height d-flex align-items-center slider_bg_${bg_className}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="hero-text">
                <div className="hero-slider-caption ">
                  <h5>We are here for your care.</h5>
                  <h1>Best Care & Better Health.</h1>
                  <p>
                    Vp Confiar Health International Limited founded in July 2023
                    with a clear vision to ensure the affordable accessibility
                    world class healthcare systems to the all people in India
                    and beyond. Company has formed by two directors based in
                    Kerala consist an Engineer and Business Man
                  </p>
                </div>
                {/* <div className="hero-slider-btn">
                           <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Make Appointment</Link>

                           <button onClick={() => setIsOpen(true)}
                              className="play-btn popup-video"><i className="fas fa-play"></i></button>

                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSingleSlide;
