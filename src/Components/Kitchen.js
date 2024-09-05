import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {FaEnvelope,FaPhoneAlt,FaShoppingBag } from "react-icons/fa";

export default function Kitchen() {
  return (
    <div>

<Container>
        <img src={ require("../assets/media/images/kitchenhome.webp")} width="100%" alt=""/> 
        <br/>
        <br/>

        <h4 style={{color:"#BFBFBF"}}>Kitchenware Utensils</h4>
        <p>Spruce up your kitchen decor for a clutter-free cooking space with our wide range of kitchen essentials.</p>

        


        {/* ------------------------------------------------------ROW ONE STARTED--------------------------------------------------------- */}
      
      <Row>
      <Col >
      <h6>FILTERS</h6><br/><hr/>
      <p>TYPE </p><hr/>
      <p>COLOUR</p><hr/>
      <p>PRICE</p><hr/>
      <p>MATERIALS</p><hr/>
      </Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen1.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Vintage Patterned Glass Jar With Lid Set Of 4 700ml  <br/>        
          <b>₹1,800</b>  <s>&#8377;2,650</s>  (32%OFF)           <FaShoppingBag />
          
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen2.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Seasoning Jar With Lid Set Of 6 100ml<br/><br/>
          <b>&#8377;895</b> <s>&#8377;1,315</s>  (32% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen3.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Diamond Airtight Glass KitchenJar Set Of 2 For Coolies Snacks...<br/>
        <b>&#8377;650</b> <s>&#8377;1,300</s> (50% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen4.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Glass Kitchen Jar With Lib Set Of 4 Rings Design 1400mlk<br/>
          <b>&#8377;895</b> <s>&#8377;1,790</s> (50% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW ONE ENDED--------------------------------------------------------- */}




     {/* ------------------------------------------------------ROW TWO STARTED--------------------------------------------------------- */}
      
     <Row>
     <Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen5.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Modern Ceramic Storage Jar With Lid Of 2<br/>
          <b>&#8377;1,150</b> <s>&#8377;1,750</s> (34% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen6.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Set Of 4 Monstera Leaf Glass Jar With Rose Gold Lid 1500ml<br/>
          <b>&#8377;895</b> <s>&#8377;1,790</s>  (50% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen7.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
       Set Of 4 Textured Glass Jars With Basket Weave 1600ml<br/>
        <b>&#8377;995</b> <s>&#8377;1,990</s> (50% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen8.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Set Of 4 Gol Measuring Spoons<br/><br/>
          <b>&#8377;850</b> <s>&#8377;1,350</s> (37% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
     {/* ------------------------------------------------------ROW TW0 ENDED--------------------------------------------------------- */}

<br/>
<br/>

{/* ------------------------------------------------------ROW THREE STARTED--------------------------------------------------------- */}
      
<Row>
<Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen9.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Bento Pink 4 Grid Stainless Steel Lunch Box For Office 950ml<br/>
          <b>&#8377;1,377</b> <s>&#8377;2,190</s> (37% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen10.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Double Decker Bento Lunch Blue 1400ml<br/>
          <b>&#8377;1,650</b> <s>&#8377;2,200</s>  (25% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen11.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Glass Snack Jars Set Of 12 250ml<br/><br/>
        <b>&#8377;1,140</b> <s>&#8377;1,710</s> (33% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen12.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Bento Blue Stainless Steel Tiffin Box 950ml<br/>
          <b>&#8377;1,377</b> <s>&#8377;2,190</s> (37% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW THREE ENDED--------------------------------------------------------- */}


     {/* ------------------------------------------------------ROW FOUR STARTED--------------------------------------------------------- */}
      
<Row>
<Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen13.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Bento Lunch Box With Mobile Holder Green 1050ml<br/>
          <b>&#8377;1,550</b> <s>&#8377;1,950</s> (21% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen14.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Empress Cast Iron Ultra Smooth Flat Base Kadai 9 Inch<br/>
          <b>&#8377;1,590</b> <s>&#8377;1,990</s>  (20% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen15.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Glass Storage Jars With Lid Set Of 6 Large 400ml<br/>
        <b>&#8377;750</b> <s>&#8377;995</s> (25% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen16.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Bento Beige Stainless Steel Insulated Lunch Box For Work...<br/>
          <b>&#8377;1,377</b> <s>&#8377;2,190</s> (3%7 OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>

    <br/>
    <br/>
     {/* ------------------------------------------------------ROW FOUR ENDED--------------------------------------------------------- */}



     {/* ------------------------------------------------------ROW FIVE STARTED--------------------------------------------------------- */}
      
<Row>
<Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen17.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Glass Jar With Seal-Small<br/><br/>
          <b>&#8377;790</b>    <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen18.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Glass Airtight Container Set Of 16 100mlr<br/>
          <b>&#8377;745</b> <s>&#8377;845</s>  (12% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen19.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Empress Cast Iron Ultra Smooth Shallow Pan 9.5 Inch<br/>
        <b>&#8377;1,190</b> <s>&#8377;1,490</s> (20% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen20.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Rotating Metal Storage Rack Black<br/><br/>
          <b>&#8377;2,490</b> <s>&#8377;2,835</s> (12% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW FIVE ENDED--------------------------------------------------------- */}

{/* ------------------------------------------------------ROW SIX STARTED--------------------------------------------------------- */}
      
<Row>
<Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen21.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Floral Embossed Ceramic Jar For Storage Set Of 2 Mint Green<br/>
          <b>&#8377;1,093</b> <s>&#8377;1,750</s> (38% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen22.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Soft Vintage Ceramic Jar Glossy Pastel Blue<br/>
          <b>&#8377;618</b> <s>&#8377;1,000</s>  (38% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen23.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Vintage Butter Dish White<br/><br/>
        <b>&#8377;1,420</b> <s>&#8377;1,490</s> (5% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen24.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Whale Double Walled Anti-Slip Feeding Bowl Orange 400ml<br/>
          <b>&#8377;850</b>     <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW SIX ENDED--------------------------------------------------------- */}


     {/* ------------------------------------------------------ROW SEVEN STARTED--------------------------------------------------------- */}
      
<Row>
<Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen25.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Bowl Foe Dessert Set Of 6<br/><br/>
          <b>&#8377;895</b> <s>&#8377;995</s> (10% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen26.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Pink Musical Noted Lace Cupcake Wrapper Set Of 20<br/>
          <b>&#8377;400</b> <s>&#8377;590</s>  (32% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen27.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Purple Musical Noted Lace Cupcake Wrapper Set Of 20<br/>
        <b>&#8377;400</b> <s>&#8377;590</s> (32% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/kitchen28.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Oval Dish Set Of 6<br/><br/>
          <b>&#8377;855</b> <s>&#8377;995</s> (14% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW SEVEN ENDED--------------------------------------------------------- */}


{/* ------------------------------------------------------Theory--------------------------------------------------------- */}


<h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}>Enhance your kitchen with modern kitchenware items</b></h5>
<small style={{wordSpacing:"3px"}}>Welcome to Nestasia, your one-stop shop for the finest in modern, premium, and luxury kitchenware online. Our passion lies in elevating your culinary experience with an exquisite range of kitchen essentials. From modern kitchenware that blends functionality with style to premium kitchenware that sets new standards of quality, we curate products that meet the concerns of discerning chefs.

Explore the finest range of products. At Nestasia, we take care of all your kitchen needs -  from cookware and bakeware to organizers and storage containers. Our durable and sturdy cookware will ensure ease of cooking for years to come. Indulging in your favourite baked treats has been made easier with our even-heating, versatile, and modern bakeware.

Our airtight storage jars keep your favourite snacks and nibbles fresh, while our glass lunch box preserves the warmth and love with which your office lunch was packed. Thanks to their high heat retention capacity, our modern collection of ceramic cooking pots is perfect for serving piping hot ramen, comforting porridge, or a hearty broth. From precision-engineered cutlery that makes each slice a work of art to airtight containers that keep your ingredients fresh, we are dedicated to enhance your culinary 
journey with modern state-of-the-art kitchen items that are the backbone of any kitchen. </small>

<br/>
    <br/>
<h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}>Explore luxury kitchenware online at Nestasia</b></h5>
<small style={{wordSpacing:"3px"}}>At Nestasia, we take pride in offering a diverse and carefully curated range of kitchen items that cater to amateur cooks, culinary enthusiasts, and professional chefs. Our collection embodies the perfect blend of form and function, designed to elevate your cooking experience and enhance the heart of your 
  home- the kitchen. We are dedicated to upholding the highest standards and delivering</small>






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
