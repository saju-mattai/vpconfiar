import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "antd";

const HomeSIngleService = ({ image, title, border_class, id,content }) => {
  const navigate = useNavigate();

  ///modal box
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

 

  const handleView = () => {

    setFilteredData([{id,image,title,content}]);
    setIsModalOpen(true);

    // navigate("/servicesDetails", { state: { filteredData: filteredResult } });
  };
  const handleMouseEnter = () => {
    // Set the desired cursor style when hovering over the <h2> element
    document.getElementById(id).style.cursor = "pointer";
  };

  const handleMouseLeave = () => {
    // Reset the cursor style when the mouse leaves the <h2> element
    document.getElementById(id).style.cursor = "auto";
  };


  return (
    <>
      <Modal
        title= {filteredData.map((item)=>item.title)}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{marginTop:"30px"}}
      >
        <li>
         <ul> {filteredData.map((item)=>item.content)}</ul>
        </li>
      </Modal>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div
          className={
            border_class
              ? `service-box ${border_class} text-center mb-30`
              : "service-box text-center mb-30"
          }
        >
          <div className="service-thumb">
            <img src={`img/services/service${image}.png`} alt="" />
          </div>
          <div className="service-content">
            {/* <h3><Link to="/servicesDetails">{title}</Link></h3> */}
            <h3
              id={id}
              onClick={() => {
                handleView();
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {title}
            </h3>
            <p>
              {content?.slice(0,100)}
            </p>
          
            <h6
              id={id}
              onClick={() => {
                handleView();
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Read More
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSIngleService;
