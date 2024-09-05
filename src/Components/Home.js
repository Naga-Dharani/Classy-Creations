import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaEnvelope,FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div>

        {/* --------------------------------------------------------carousel part--------------------------------------------------------- */}


    <Carousel fade>
      <Carousel.Item>
      <img src={ require("../assets/media/images/carousel1.webp")} width="100%" alt=""/>
        <Carousel.Caption>
          <h3>Welcom to Classy Creations</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ require("../assets/media/images/carousel2.webp")} width="100%" alt=""/>
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ require("../assets/media/images/homepageimg1.webp")} width="100%" alt=""/>
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* --------------------------------------------------------carousel part ended--------------------------------------------------------- */}
      <br/>
      <br/>
      <br/>

      <h3 style={{textAlign:"center", fontFamily:"-moz-initial"}}>Fresh On The Net</h3>


    <Container>
      <Row>
        <Col><img src={ require("../assets/media/images/homeimg1.webp")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/homeimg2.webp")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/homeimg3.webp")} width="100%" alt=""/></Col>
      </Row>
      <br/>
      <br/>
      <Row>
      <Col><img src={ require("../assets/media/images/homeimg4.webp")} width="90%" height="80%" alt=""/></Col>
      <Col><img src={ require("../assets/media/images/homeimg5.webp")} width="100%"  height="80%" alt=""/></Col>
      </Row>

     

     <Row>
     <h3 style={{textAlign:"center", fontFamily:"-moz-initial"}}>Shop By Material</h3>
     <br/>
     <br/>
     
        <Col><img src={ require("../assets/media/images/material.avif")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/material1.avif")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/material2.avif")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/material3.webp")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/material4.avif")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/material5.avif")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/material7.avif")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/material8.avif")} width="100%" alt=""/></Col>
        
      </Row>
      <br/>
      <br/>

      <Col><img src={ require("../assets/media/images/homepageimg.webp")} width="100%" alt=""/></Col>
      <br/>
      <br/>
      <br/>
      {/* -----------------------------------------------------------NEST LUXE--------------------------------------------------------------- */}

      <h3 style={{textAlign:"center", fontFamily:"-moz-initial"}}>Nest Luxe</h3>
      <br/>
      <Row>
        <Col><img src={ require("../assets/media/images/homeluxe1.webp")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/homeluxe2.webp")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/homeluxe3.webp")} width="100%" alt=""/></Col>
        <Col><img src={ require("../assets/media/images/homeluxe4.webp")} width="100%" alt=""/></Col>
      </Row>

      <br/>
      <br/>
      <br/>

      <Col><img src={ require("../assets/media/images/homepageimg1.webp")} width="100%" alt=""/></Col>


     {/* -----------------------------------------------------------Blog--------------------------------------------------------------- */}

     <h3 style={{textAlign:"center", fontFamily:"-moz-initial"}}>Blog</h3>






     <br/>
     <br/>
    <br/>
    <br/>
    <br/>
{/* -----------------------------------------------------------Lines--------------------------------------------------------------- */}

<h6>About Nestasia</h6>
<small>Nestasia - India's Most Loved Lifestyle AndHome Decor StoreMake Home Special is not only a motto Nestasia follows but also a way to celebrate creativity and individuality. With products that are as functional as they’re beautiful, 
  Nestasia is a home decor brand with a wide range of uniquely designed, quality...</small>
  <p><u>Read More...</u></p>


  <br/>
  <br/>
 <h5 style={{fontFamily:"-moz-initial",color:""}}>POPULAR CATEGORY</h5> 
 <br/>
  <h6 style={{fontFamily:"-moz-initial",color:""}}>Dinner Set , Cup - Mug , Cake Stand , Tea Sets , Plate , Pasta Plates , Coasters , Teapots , Ramen Bowls 
    , Snack Plate , Trays , Tea Set With Kettle , Rugs , Dinner Plate , Cottagecore</h6>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
 <br/>
 <br/>
 <h5 style={{fontFamily:"-moz-initial",color:""}}>GIFTS FOR FESTIVALS/ OCCASIONS</h5>
 <br/>
 <h6 style={{fontFamily:"-moz-initial",color:""}}>Gifts For Holi , Gifts For Eid , Women’s Day Gifts , Janmashtami Decor</h6>

 {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
<br/><br/>

<h5 style={{fontFamily:"-moz-initial",color:""}}>GIFTS FOR SPECIAL OCCASIONS</h5>
<br/>
<h6 style={{fontFamily:"-moz-initial",color:""}}>Anniversary Gifts , Wedding Gifts , Housewarming Gifts , Baby Shower Gifts , 
  Birthday Gifts , Farewell Gifts</h6>

  {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
<br/><br/>

<h5 style={{fontFamily:"-moz-initial",color:""}}>GIFTS BY RELATIONSHIPS</h5>
<br/>
<h6 style={{fontFamily:"-moz-initial",color:""}}>Gifts for Wife , Gifts for Husband , Gifts for Sister , Gifts for Brother , Gifts for Friends , Gifts for Mother , Gifts for Father
   , Gifts for Girlfriend , Gifts for Colleagues</h6>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
<br/><br/>

 <h5 style={{fontFamily:"-moz-initial",color:""}}>POPULAR Searches</h5>
 <br/>
 <h6 style={{fontFamily:"-moz-initial",color:""}}>Tote Bags | Marble Dinnerset | Chef Decor | Tissue Box | Bowls With Chopsticks | Bread Plate | Leaf Platter | Nitori Side Bowl | Bathroom Set | Lunch Bag | Incense Diffuser | Modern Cutlery Set | Vera Black Plates 
  | House Plant Pots | Angel Decor | Scoop Spoon</h6>









    </Container>
    <br/>


    {/*-------------------------------------------------------------FOOTER SECTION-----------------------------------------------------------*/}
  {/* <div style={{backgroundColor:"red",color:"white"}}>  */}
  <div className='container'>
 {/* <Row>
  <Col> <img src={ require("../assets/media/images/logo.png")} width="100%" alt=""/></Col>
  <Col></Col>
  <Col></Col>
  <Col></Col>
  <Col></Col>
  <Col></Col>
 </Row> */}

  <div  className='row py-4 '>
    <div className='col-md-4 col-sm-12 col-lg-2 '>
      <h5>Stay In Touch</h5>
      <br/>
      <p>Sign up for exclusive offers, original stories, events and more.</p>
      <h5>Contact us</h5>
      <p><FaEnvelope /> info@nestasia.in </p>
        <p><FaPhoneAlt /> +91 9903504754</p>

    </div>
    <div className='col-md-4 col-sm-12 col-lg-2'>
      <h5>Top Categories</h5>
      <br/>
      <p>Dining</p>
      <p>Kitchen</p>
      <p>Decor</p>
      <p>Bath + Storage</p>
      <p>SoftFurnishing</p>
      <p>Stationery</p>
      <p>Garden</p>
    </div>
    <div className='col-md-4 col-sm-12 col-lg-2'>
      <h5>Decore</h5>
      <br/>
      <p>Vases</p>
      <p>Candles + Votives</p>
      <p>Photo Frame</p>
      <p>Decor Objects</p>
      <p>Dried Flowers</p>
      <p>Wall Decor</p>
      <p>Mirror</p>
      <p>Boxes</p>
    </div>
    <div className='col-md-4 col-sm-12 col-lg-2'>
      <h5>About us</h5>
      <br/>
      <p>Our Story</p>
      <p>Store Locator</p>
      <p>Blog</p>
      <p>Careers</p>
      <p>Designer Affiliate Program</p>
    </div>
    <div className='col-md-4 col-sm-12 col-lg-2'>
      <h5>Quick Links</h5>
      <br/>
      <p>Shop All</p>
      <p>Janmashtami Decor</p>
      <p>Rakhi Gifts</p>
      <p>Teej Gifts</p>
      <p>Sale</p>
      <p>Gift Cards</p>
      <p>Offers</p>
    </div>
    <div className='col-md-4 col-sm-12 col-lg-2'>
      <h5>Help</h5>
      <br/>
      <p>Create a Return</p>
      <p>Shipping</p>
      <p>Privacy Policy</p>
      <p>Return Policy</p>
      <p>Terms & Conditions</p>
      <p>Contact Us</p>
      <p>FAQs</p>
    </div>
   


  </div>

 </div>
 {/* <Row>
  <Col></Col>
  <Col></Col>
  <Col></Col>
  <Col>
  <div className= "footerapps">
            <img src={ require("../assets/media/images/decore1.webp")}  alt=""/> 
            <img src={ require("../assets/media/images/Candles.webp")}  alt=""/> 
 </div>
  </Col>
 </Row> */}
 













  
    </div>
    // </div>



      
    
  )
}
