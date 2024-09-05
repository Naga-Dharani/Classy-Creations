import React from 'react'
import DiningItems from "./DiningItems.json";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaEnvelope,FaPhoneAlt,FaShoppingBag } from "react-icons/fa";


import Card from 'react-bootstrap/Card';

export default function Dining() {
  return (
    <div>
        <Container>
        <img src={ require("../assets/media/images/carousel1.webp")} width="100%" alt=""/> 

        <br/>
        <br/>
        <h4 style={{color:"#BFBFBF"}}>Crockery Sets, Dinnerware, Tableware Sets & Modern Dining Accessories</h4>
        <p>Make way for a delightful dining experience with our premium and modern dinnerware, tableware and crockery sets.</p>
        </Container>
        
        {/* -----------------------------------------------------JSON CARD--------------------------------------------------------- */}
        <div className='row'style={{marginTop:"40px", marginLeft:"4%", border:"none"}}>
        {DiningItems.map((item)=>(
          <div className='col'>
          <div className='col-lg-3'style={{marginBottom:"40px"}}>
               <Card style={{ width: '19rem',height:"400px" }}>
               <Card.Img style={{height:"70%",width:"100%"}} variant="top" src={item.image} />
               <Card.Body>
               <Card.Title style={{fontSize:"15px"}}>{item.title}</Card.Title>
               <Card.Text>
               <b>{item.price}</b>  <s>{item.dis}</s> {item.off}   <FaShoppingBag />
               
               
               </Card.Text>
                  
               </Card.Body>
           </Card>
           </div>
           </div>
           

        ))}    

        </div>  

        {/* ----------------------------------------------------- THEORY------------------------------------------------------------------------- */}
        <Container>

        <h2 ><b style={{fontFamily:"-moz-initial",color:"#9354ab"}}> Explore a wide range of gift hampers, exquisite
           bags, and premium gift cards available for purchase online at Nestasia  </b></h2>
            <br/>
            <br/>
           

           <h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab",wordSpacing:"5PX"}}> Wedding gift hamper  </b></h5>
           <small style={{wordSpacing:"3px"}}>Nestasia's stunning selection of wedding gift hampers is the perfect way to celebrate love. Our hampers, which have been thoughtfully chosen to brighten the couple's special day, are elegant and charming. Discover the ideal presents that perfectly express your heartfelt wishes, from lovely home decor items to charming lifestyle
             accessories. Using Nestasia, make their wedding memories unforgettable!</small>
             <br/>
             <br/>
             <h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}> Gift cards  </b></h5>
             <small style={{wordSpacing:"3px"}}> With Nestasia's exclusive selection of gift cards for special occasions, you can show your affection and compassion. Celebrate the joy of gifting with our exquisitely created cards on occasions such as birthdays, anniversaries, and Rakhi. Give your loved ones the freedom to select the ideal items for their homes and lifestyles.
               With Nestasia gift cards, you can make every occasion special.</small>

               <br/><br/>
               <h2 ><b style={{fontFamily:"-moz-initial",color:"#9354ab"}}> All FAQs Related to Dining Answered: </b></h2>
<br/>
  <h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}>Can I put the dinner set in the oven or freezer without damaging it?</b></h5>
  <small style={{wordSpacing:"3px"}}>It depends on the material. You can put our glass or ceramic dinnerware, porcelain dinner plate sets in the freezer or oven, but we should avoid drastic temperature changes. Sets with metallic details
     or delicate patterns, however, might not be suitable for the freezer or oven. </small>

<br/>

  <h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}>How do I find a dinner set that fits my style and budget? </b></h5>
<small style={{wordSpacing:"3px"}}>Determine your preferred aesthetic and establish a price range in order to obtain a good dining set that fits both your style and budget. Compare pricing and selections at various online and offline businesses. Choose porcelain dinnerware sets with parts that are adaptable and necessary for different occasions. For a successful search,
   do careful research, control your spending, and consider your personal style.</small>

<br/>


<h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}>What are the best dinner sets for everyday use?</b></h5>
<small style={{wordSpacing:"3px"}}>The chip-resistant and scratch-resistant ceramic dinner sets that are dishwasher-safe and microwave-safe are the best dishes for everyday use. Nestasia has a wide range of sturdy ceramic dinner sets to offer in various sizes and colours, that make everyday dining a more comfortable and enjoyable experience. The ceramic dishes are also non-porous, 
  meaning they don't stain easily and are sustainable and material-safe for serving food.</small>

{/* -----------------------------------------------------------Lines--------------------------------------------------------------- */}
<br/>
    <br/>
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
