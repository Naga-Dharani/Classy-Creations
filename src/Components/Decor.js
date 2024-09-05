import React from 'react'
import DecorItems from "./DecorItems.json"
import Container from 'react-bootstrap/Container';
import {FaEnvelope,FaPhoneAlt,FaShoppingBag } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

export default function Decor() {
  return (
    <div>
        <Container>
        <img src={ require("../assets/media/images/carousel2.webp")} width="100%" alt=""/> 

        <br/>
        <br/>
        <h4 style={{color:"#BFBFBF"}}>Unique Home Decor Items</h4>
        <p>Experience the allure of modern living with Nestasia's collection of modern home decor. Our unique home decor items will
           breathe new life into your living spaces.</p>
        </Container>
        
        {/* -----------------------------------------------------JSON CARD--------------------------------------------------------- */}
        <div className='row'style={{marginTop:"40px", marginLeft:"4%", border:"none"}}>
        {DecorItems.map((item)=>(
          <div className='col-lg-3'style={{marginBottom:"40px"}}>
               <Card style={{ width: '19rem',height:"400px" }}>
               <Card.Img style={{height:"70%",width:"100%"}} variant="top" src={require("../assets/media/images/"+item.image+"")} />
               <Card.Body>
               <Card.Title style={{fontSize:"15px"}}>{item.title}</Card.Title>
               <Card.Text>
               <b>{item.price}</b>  <s>{item.dis}</s> {item.off}  <FaShoppingBag />
               
               
               </Card.Text>
                  
               </Card.Body>
           </Card>
           </div>

        ))}    

        </div>   


        {/* ----------------------------------------------------- THEORY------------------------------------------------------------------------- */}
        <Container>



        <h2 ><b style={{fontFamily:"-moz-initial",color:"#9354ab"}}> Unique Home Decor Items </b></h2>

        <br/>



        <h2 ><b style={{fontFamily:"-moz-initial",color:"#9354ab"}}> 1. Elevate Your Home with Luxurious Decor Accents </b></h2>
        <small style={{wordSpacing:"3px"}}>Welcome to Nestasia, your ultimate destination for exquisite home decor accents and one of the best home decor online stores in India that can transform any space into a haven of elegance and style. Discover the perfect accents for your living space with our premium home decor collection. As a premium home decor online shopping destination for unique decorative items, we pride ourselves on curating a stunning collection of premium home decor items that cater to discerning individuals seeking to elevate their room decor to new heights.

At Nestasia, we understand that your home is a reflection of your unique personality and taste. Our collection includes a wide range of premium and modern small home decor items that blend sophistication with contemporary design. Our selection of home decor gifts and home decoration items for your living room is carefully curated to inspire and captivate. Elevate your home's ambience with our carefully curated selection of decorative items for home, designed to inspire and delight.

Indulge in the pleasure of discovering our exclusive range of room decoration items and home accessories online, meticulously handpicked to ensure unparalleled quality and craftsmanship. From mesmerising wall art to opulent sculptures and charming tableware, every piece in our collection is a testament to the fusion of art and functionality. Get all your needs of decoration items for home, catered to you by browsing home decor online at Nestasia.

Nestasia prides itself on offering unique decor for living room and decorative items for home that transform ordinary spaces into extraordinary sanctuaries. With an eye for detail and a passion for luxurious accents, we strive to create an immersive shopping experience that allows you to express your personal style and create a home that truly resonates with your aesthetic aspirations.</small>

<br/>
<br/>


<h2 ><b style={{fontFamily:"-moz-initial",color:"#9354ab"}}>2. Luxury Home Decor Items Online at Nestasia  </b></h2>
<small style={{wordSpacing:"3px"}}>At Nestasia, we offer premium quality and artisanal room decoration items and home decor items across several categories and sub-categories. To explore our entire collection of decoration items for home and home accessories online, let us give you a preview of what we have in store for you throughout our different decor categories. Read on to know more about our 
  diverse collection of modern home decor items and home accessories list.</small>


  <br/>
  <br/>
  
  <h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}><ul><li>Luxury Candles</li></ul></b></h5>
<small style={{wordSpacing:"3px"}}>If you're searching for the perfect home decor items to elevate your living space, you've come to the right place. Our collection of luxury candles, candle holder votives and candle stands is sure to captivate your senses and add a touch of sophistication to any room.

At Nestasia, we understand that home decor is an expression of personal style and taste. That's why we curate a meticulously crafted selection of premium home decor items, including an array of exquisite candles and candle stands. Our luxury candles are carefully designed to create a mesmerizing atmosphere, enveloping your surroundings in a soothing aroma. From refreshing scents to warm, cosy fragrances, each candle is crafted using 
the finest quality ingredients, ensuring a long-lasting and delightful experience.</small>

<br/>
<br/>
  


<h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}><ul><li>Decorative Mirrors</li></ul></b></h5>
<small style={{wordSpacing:"3px"}}>Explore our exquisite collection of decorative mirrors at Nestasia, where functionality meets elegance. Our carefully curated range features a wide selection of wall mirrors and dressing table mirrors, designed to enhance your room decor with a touch of sophistication. From sleek and modern designs to ornate and vintage-inspired pieces, our collection offers an array of options to suit every style and taste. 

Elevate your living spaces with these modern decorative items for the living room, adding depth and light while making a bold statement. Discover the perfect mirror to reflect your unique personality and create a visually captivating ambience in your home. Let’s dive in to explore our collection of decorative mirrors!</small>


<br/>
<br/>
    

<h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}><ul><li>Photo Frames</li></ul></b></h5>
<small style={{wordSpacing:"3px"}}>Nestasia is your ultimate destination for home decor online shopping. We offer an exquisite collection of decorative photo frames that will add charm and elegance to your living spaces. Our home decor items are designed to create a captivating ambience and enhance your room decor.

At Nestasia, we understand the importance of unique decorative items for homes. Our premium home decor collection features modern home decor items that blend seamlessly with any interior style. Whether you're looking for a statement piece or a subtle accent, our photo frames will beautifully showcase your cherished memories.</small>


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
