import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {FaEnvelope,FaPhoneAlt,FaShoppingBag } from "react-icons/fa";


export default function Bath() {
  return (
    <div>
        <Container>
        <img src={ require("../assets/media/images/bathhomepage.webp")} width="100%" alt=""/> 
        <br/>
        <br/>

         <h4 style={{color:"#BFBFBF"}}>Bathroom Decor</h4> 
        <p>Rejuvenate your bathroom decor with our exclusive range of bathroom essentials and bathroom accessories.</p>

        
        <br/>

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
      <Card.Img variant="top" src={ require("../assets/media/images/bath1.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Floral Blue Bath Accessory Set Of 3  <br/><br/>
          <b>₹1,450</b>  <s>&#8377;2,250</s>  (36%OFF)       <FaShoppingBag />
          
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath2.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Serene Blue Bath Set Of 3<br/><br/>
          <b>&#8377;1,350</b> <s>&#8377;2,700</s>  (35% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath3.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Chic Arches Ceramic Bath Set Of 2 Matte Black<br/>
        <b>&#8377;745</b> <s>&#8377;995</s> (25% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath4.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Bubble Design Soap Dispenser Beige 520ml<br/>
          <b>&#8377;595</b> <s>&#8377;850</s> (30% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/bath5.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Brick Textured Liquid Dispenser White 450ml<br/>
          <b>&#8377;690</b> <s>&#8377;985</s> (30% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath6.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Brick Design Handwash Dispenser Grey 450ml<br/>
          <b>&#8377;690</b> <s>&#8377;985</s>  (30% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath7.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Black Matte Wave Bath Accessory Set Of 3<br/>
        <b>&#8377;1,595</b> <s>&#8377;2,280</s> (30% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath8.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Ripple Design Bathroom Set Of 3 Matte White<br/>
          <b>&#8377;1,595</b> <s>&#8377;2,280</s> (30% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/bath9.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Sage Green Bathroom Set Of 2 With Organic Texture<br/>
          <b>&#8377;695</b> <s>&#8377;990</s> (30% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath10.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Ceramic Texture Arched Bathroom Accessories Set of 2<br/>
          <b>&#8377;749</b> <s>&#8377;995</s>  (25% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath11.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Stone Texture Modern Bathroom Set Of 2 Sand<br/>
        <b>&#8377;895</b> <s>&#8377;1,280</s> (30% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath12.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Coastal Shell Stoneware Bath Set Of 2 Brown<br/>
          <b>&#8377;775</b> <s>&#8377;995</s> (24% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/bath13.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Set Of 2 Unicorn Lavender Super Soft Bamboo Towels<br/>
          <b>&#8377;849</b> <s>&#8377;1,590</s> (47% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath14.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Peach Bamboo Quick Cry Towels Set Of 2<br/>
          <b>&#8377;849</b> <s>&#8377;1,590</s>  (47% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath15.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Grey Green Turkish Bamboo Cotten Bath Towels Set Of 2<br/>
        <b>&#8377;849</b> <s>&#8377;1,590</s> (47% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath16.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Marron Blush Ultra Soft Bamboo Cotten Towels Set Of 2<br/>
          <b>&#8377;849</b> <s>&#8377;1,590</s> (47% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/bath17.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Aqua Towel<br/>
          <b>&#8377;1,260</b> <s>&#8377;2,250</s> (44% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath18.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Beach Towel<br/>
          <b>&#8377;1,260</b> <s>&#8377;2250</s>  (44% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath19.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Play Mat<br/>
        <b>&#8377;1,260</b> <s>&#8377;2,250</s> (44% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath20.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Rainbow Towel Mat<br/>
          <b>&#8377;1,260</b> <s>&#8377;2,250</s> (44% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/bath21.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Matte Black Ceramic Bathroom Set Of 3 Dip Glazed<br/>
          <b>&#8377;1,350</b> <s>&#8377;2,080</s> (35% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath22.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Glossy Scandi Bathroom Accessories Set Of 2 White Blue<br/>
          <b>&#8377;795</b> <s>&#8377;1,190</s>  (33% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath23.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Stoneware Bathroom Accessories Set Of 3<br/>
        <b>&#8377;1,350</b> <s>&#8377;2,080</s> (35% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath24.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Bathroom Dispenser<br/>
          <b>&#8377;615</b> <s>&#8377;1,000</s> (39% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/bath25.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Scandinavian Bath Set of 2 Serene Cream<br/>
          <b>&#8377;795</b> <s>&#8377;1,190</s> (33% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath26.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Bath Dispenser<br/>
          <b>&#8377;695</b> <s>&#8377;1,320</s>  (47% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath27.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Starfish Ceramic Soap Dispenser Blue<br/>
        <b>&#8377;590</b> <s>&#8377;790</s> (25% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath28.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Beach Shell Ceramic Bath Set Of 2 Cream Beige<br/>
          <b>&#8377;7775</b> <s>&#8377;995</s> (24% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW SEVEN ENDED--------------------------------------------------------- */}


     {/* ------------------------------------------------------ROW EIGHT STARTED--------------------------------------------------------- */}
      
<Row>
<Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath29.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Hand Soap Dispenser<br/>
          <b>&#8377;710</b> <s>&#8377;790</s> (10% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath30.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         stylish Hand Wash Bottle<br/>
          <b>&#8377;575</b> <s>&#8377;639</s>  (10% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath31.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Retro Ceramic Liquid Dispenser Lavender<br/>
        <b>&#8377;850</b> <s>&#8377;1,300</s> (35% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/bath32.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Grometric White Bath Set <br/>
          <b>&#8377;1,150</b> <s>&#8377;1,670</s> (31% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW EIGHT ENDED--------------------------------------------------------- */}

     {/* -----------------------------------------------------------THRORY------------------------------------------------------------------ */}

     <h2 ><b style={{fontFamily:"-moz-initial",color:"#9354ab"}}> Buy Bathroom Decor & Storage Items Online in India|Nestasia </b></h2>
     <br/>
     

     <h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}>1. Discover the Best Bath Accessories and Storage Solutions</b></h5>
<small style={{wordSpacing:"3px"}}>Are you looking for the ideal online store where you can find outstanding bath accessories? Look nowhere else! We are aware that finding the ideal bath essentials might be difficult. A broad selection of bath accessories is available from Nestasia, a user-friendly online store, to match different interior designs and satisfy a range of preferences. You will easily find luxury bathroom accessories to turn your bathroom into a refuge of comfort and style. At Nestasia, we take great satisfaction in hand-picking the finest ceramic bathroom sets and bath accessories online, each one created to enhance the beauty and practicality of your private haven.

Nestasia prioritizes quality, craftsmanship, and client satisfaction; hence, our bath accessories, bathroom sets, or bath essentials are carefully chosen to meet the needs and preferences of our customers. Our high-quality modern bathroom accessories are not only functional but also aesthetically pleasing, which will make you fall in love with them. Whether you are looking for an ideal gift for your friends and family or looking forward to an amazing bathroom makeover, our collection of ceramic bathroom sets and luxurious bathroom accessories online is here for your rescue. Nestasia’s collection of exquisite bathroom essentials online is available in a variety of designs to choose from. From contemporary and minimalist patterns to detailed and decorative ones, 
our modern bathroom accessories set collection is here to steal the show. </small>


<br/>
<br/>
<h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}>2. Explore Bathroom accessories, Essentials and Decor items at Nestasia</b></h5>
<small style={{wordSpacing:"3px"}}>If you’re thinking about buying some luxurious bathroom accessories online in India, your search ends here. Nestasia is the one-stop destination for all your bathroom needs. Our array of magnificent bath essentials, bathroom accessories, and bathroom decor items is here to lend an opulent touch to your bathroom decor. From sleek and stylish to elegant and classic bathroom accessories, we've got something to suit every taste. Be it our elegant dispenser for bathroom or adorable toothbrush holders and bathroom organizers, Nestasia provides you with everything you need to create the bathroom of your dreams.

Bring home our exquisite bathroom accessories, bath essentials, bathroom decor items, and bathroom organizers that are not only practical but are also available in a variety of styles to choose from. Our bathroom essentials and ceramic bathroom set collections are meticulously designed to be the perfect partner for your everyday self-care ritual. From plushy cotton towels and beach towels to exquisite liquid soap dispensers and door mats, we aim to provide you with everything you need to create a pampering oasis within the comfort of your home.</small>
<br/>
<br/>

<h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}>3. Also check out rakhi hampers and rakhi card online</b></h5>
<small style={{wordSpacing:"3px"}}>Celebrate the bond of love and togetherness with Nestasia's exclusive collection of Rakhi gift hampers. Each gift hamper in the collection is curated to cater to diverse preferences, making them ideal for gifting on the auspicious occasion of Raksha Bandhan. From captivating decor objects to delectable treats, our rakhi hampers comprise everything to suit your personal taste and preferences.

We also have an exclusive collection of Rakhi gift cards that provide you with a seamless and personalized gifting experience. Shop now from our exclusive collection of home decor gifts online and make this Raksha Bandhan an extraordinary one. </small>
<br/>
<br/>
<h2 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}> FAQs </b></h2>


<p><b>Are your bath products tested for quality and safety standards?</b></p>
<p>Yes, our bathroom organizers, bath accessories, and other bathroom accessories have passed quality and safety tests. Before being made available to customers, Nestasia, a well-known home décor company, goes through extensive quality and safety testing. Durability, performance, and compliance with applicable safety standards and laws are all evaluated during this testing process. The bathroom accessories 
  are ideal for regular use because they are made from strong and durable materials. </p>
  <br/>
  
<p><b>Is there a variety of styles and themes available for bath accessories?</b></p>
<p>Yes, Nestasia provides a wide range of bath accessory styles and themes. We take pride in offering our customers a wide variety of luxury bathroom accessories and bathroom decor items online in India as a well-known home décor brand. We have bath accessories that would match the appearance of any bathroom decor, whether you're seeking modern, minimalist, vintage, or eclectic styles. Our high-quality products are carefully chosen to satisfy a variety of tastes and preferences, enabling clients to select the ideal items that complement
   their particular sense of style and improve the appearance of their bathrooms.</p>
   <br/>
   
<p><b>How can one decorate a bathroom nicely?</b></p>
<p>For good bathroom decor, consider choosing a colour scheme that complements your fixtures and reflects your personal style. Neutral colours such as white, beige, and grey are timeless and versatile, while brighter colours can add personality to the bathroom decor. Opt for functional yet stylish items, such as a statement mirror, stylish storage solutions, and fluffy towels. Add plants or other natural elements to create
   a calming atmosphere, and choose lighting that enhances the bathroom decor.</p>


   <br/>
   <br/>
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
