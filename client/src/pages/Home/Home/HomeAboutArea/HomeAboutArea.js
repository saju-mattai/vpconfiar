import React from "react";
import './HomeAboutArea.scss'
const HomeAboutArea = () => {
  return (
    <>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="">
              {/* <div className="medical-icon-brand-2">
                <img src="img/about/medical-brand-icon-border.png" alt="" />
              </div> */}
              <div className="about-left-side pos-rel mb-30">
                {/* <div className="about-front-img">
                  <img src="img/about/about-img.jpg" alt="" />
                </div> */}
                <div className="about-shape">
                  {/* <img src="img/about/about-shape.png" alt="" /> */}
                </div>
              </div>
            </div>
            <div  className="">
              <div style={{marginTop:'0px'}}  className="">
                <div className="">
                  {/* <h5>About Us</h5> */}
                  <h3>About US</h3>
                </div>
                <div className="">
                  <p style={{margin:'20px 0px'}}  className="h-about">
                    Vp Confiar Health International Limited founded in July 2023
                    with a clear vision to ensure the affordable accessibility
                    world class healthcare systems to the all people in India
                    and beyond. Company has formed by two directors based in
                    Kerala consist an Engineer and Business Man
                  </p>
                </div>
                <div className="our-destination">
                  <div className="single-item mb-30">
                    <div className="mv-icon f-left">
                      {/* <img src="img/about/destination-icon-1.png" alt="" /> */}
                    </div>
                    <div className="mv-title fix">
                      <h3>Our Mission</h3>
                      <p className="h-about">
                        Our mission is to ensure the accessibility the world
                        healthcare systems and the most advanced
                        state-of-the-art Health care services, equipment and
                        technology to all people in India.
                      </p>
                    </div>
                  </div>
                  <div className="single-item">
                    <div className="mv-icon f-left">
                      {/* <img src="img/about/destination-icon-2.png" alt="" /> */}
                    </div>
                    <div className="mv-title fix">
                      <h3>Our Vission</h3>
                      <p className="h-about">
                        Our vision is to be the leader in ensuring affordable
                        world class healthcare accessibility to the all level of
                        communities in India.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-author d-flex align-items-center">
                  {/* <div className="author-ava">
                    <img src="img/about/author-ava.png" alt="" />
                  </div> */}
                  {/* <div className="author-desination">
                    <h4>Rosalina D. Williamson</h4>
                    <h6>founder</h6>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAboutArea;
