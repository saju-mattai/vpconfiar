import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const Sidebar = ({ show, handleClose }) => {
   const Home = <NavLink to="/home">Home</NavLink>
   const Services = <NavLink to="/services">Services </NavLink>
   const AboutUs = <NavLink to="/about">About Us </NavLink>
   const ContactUs = <NavLink to="/contact">Contact Us</NavLink>
   const News = <NavLink to="/blogSidebar">News</NavLink>
   const Pages = <a href="#">Pages</a>
   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>


                  <Collapsible  trigger={Home} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                    
                  </Collapsible>

                  <Collapsible trigger={Services} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                    
                  </Collapsible>

                  <Collapsible trigger={AboutUs} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     
                  </Collapsible>

                  <Collapsible trigger={ContactUs} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     
                  </Collapsible>
                 

                  

                  


               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;