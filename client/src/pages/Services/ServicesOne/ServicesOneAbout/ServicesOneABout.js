import React from "react";
import HomeSIngleService from "../../../../components/HomeSIngleService/HomeSIngleService";
import { cardData } from "../../../../Utils";


// Convert data to a JSON string
// const dataJSON = JSON.stringify(data);

// Store dataJSON in localStorage
// localStorage.setItem("healthcareData", dataJSON);

const ServicesOneABout = () => {
  return (
    <>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row ">
            {/* <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="section-title section-title-m-0 pos-rel mb-50 text-end"> */}
                {/* <div className="section-icon">
                  <img
                    className="section-back-icon back-icon-right"
                    src="img/section/section-back-icon.png"
                    alt=""
                  />
                </div> */}
                {/* <div className="section-text section-text-small pos-rel">
                  <h5>Vision</h5>
                  <h1>
                    Would you rather stay at home than go into a health care
                    facility?
                  </h1>
                </div> */}
              {/* </div>
            </div> */}
            {/* <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="facalty-text mb-50">
                <h2>
                  Our vision is to be the leader in ensuring affordable world
                  class healthcare accessibility to the all level of communities
                  in India .
                </h2>
              </div>
            </div> */}
          </div>
          <div className="row">
          {
            cardData.map((item)=>
              <HomeSIngleService image={item.image} title={item.title} id={item.id} content={item.content} />
            )
           }
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOneABout;
