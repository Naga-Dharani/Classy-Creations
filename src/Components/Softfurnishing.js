import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {FaEnvelope,FaPhoneAlt,FaShoppingBag } from "react-icons/fa";

export default function Softfurnishing() {
  return (
    <div>



<Container>
        <img src={ require("../assets/media/images/furnishinghomepage.webp")} width="100%" alt=""/> 
        <br/>
        <br/>

        <h4 style={{color:"#BFBFBF"}}>Soft Furnishings</h4>
        {/* <p>What's new? Explore all our latest launches and newest collections, all in one place.</p> */}

        


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
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing1.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Zigzag Handcrafted Plain Weave Area Rug 69x36 Inch  <br/>        
        <b>₹2,250</b>  <s>₹3,420</s> (34% off)           <FaShoppingBag />
          
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing2.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Marsala Embroidered 210TC Cotton Bed Cover With 2 Pillow Covers<br/><br/>
          <b>&#8377;5,690</b> <s>&#8377;8,500</s>  (33% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing3.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Flat Weave Zigzag Handwoven Cotton Dari Carpet 69x36 Inch <br/>
        <b>₹5,690</b> <s>₹8,550</s> (33% off)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing4.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Subtle Spring Couch Cushion Cover 16x16 Inch  <br/>
          <b>₹955</b> <s>₹1,375 </s> (31% off)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing5.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Flower Embroidered Couch Cushion Cover 16x16 Inch   <br/>
          <b>₹850</b> <s>₹1,350</s> (37% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing6.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Applique Embroidery Velvet Cushion Cover 20x14 Inch <br/>
          <b>₹825</b> <s>₹1,195</s>  (31% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing7.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Pink Lumbar Throw Cushion Cover With Tassels 20x12 Inch
         <br/>
        <b>₹885</b> <s>₹1,264</s> (30% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing8.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Quilted King Size Bed Cover And Pillow Case Set Of 3 Powder Blue
         <br/><br/>
          <b>₹4,490</b> <s>₹6,750</s> (33% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing9.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        BOHO Bluebell Hand Woven Rug - Blue White & Natural
<br/>
          <b>₹5,495</b>     <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing10.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        BOHO Ophelia Hand Woven Rug - Brown & White
        <br/>
          <b>₹5,795</b>   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing11.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        BOHO Lydia Morrocan Hand Woven Rug - Grey & Natural
<br/><br/>
        <b>₹5,495</b>     <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing12.jpg")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        BOHO Arna Hand Woven Rug - White & Dark Grey
<br/>
          <b>₹5,495</b>   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing13.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        BOHO Lilliana Hand Woven Rug - Indigo <br/>
          <b>₹5,795</b>   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing14.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Festive Celestial Cushion Cover Set Of 2 16x16 Inch<br/>
          <b>&#8377;1,150</b> <s>&#8377;1,990</s>  (42% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing15.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Faenza Handwork Cushion Cover Set Of 3 Peach 16x16<br/>
        <b>&#8377;1,450</b>     <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing16.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Boho Natural Cotton Living Room Rug<br/>
          <b>&#8377;5,795</b> <s>&#8377;7,725</s> (25% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing17.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Classic Beige Full Length Embroidered Curtain Set Of 2 84x54 Inch <br/><br/>
          <b>₹4,473</b> <s> ₹6,390</s> (30% off)  <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing18.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Set Of 2 Olive Green Embroidered Full Length Curtain 84x54 Inch<br/>
          <b>₹4,473</b> <s>₹6,390</s>  (30% off)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing19.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Mystic Grey Embroidered Door Curtain Set Of 2 84x54 Inch <br/>
        <b>₹4,473</b> <s>₹6,390</s> (30% off)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing20.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Abstract Embroidered Curtains For Living Room Set Of 2 Mustard 84x54 Inch
  <br/><br/>
          <b>₹4,473</b> <s>₹6,390</s> (30% off)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing21.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Quilted Leaf Pattern Bed Cover King Size Pink <br/>
          <b>₹5,690</b>    <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing22.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Luxe Cushion Cover & Runner Set Of 3 Magenta <br/>
          <b>₹995</b>    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing23.jpg")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Boho White Rugs<br/><br/>
        <b>₹5,495</b>     <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing24.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Velvet Lumbar Cushion Cover Beige 12x18 inch <br/>
          <b>₹450</b>   <s>₹665 </s>  (32% off)  <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing25.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Heart Shape Cushion Set Of 2 Plushy Red White 14x14 Inch <br/><br/>
          <b>₹750</b> <s> ₹1,000</s> (25% off)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing26.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Set Of 2 Mustard Yellow Embroidered Long Curtain 108x54 Inch
 <br/>
          <b>₹5,565</b> <s> ₹7,950</s>  (30% off)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing27.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Set Of 2 Love Heart Linen Cushion Cover With Pocket 16x16 Inch
  <br/>
        <b>₹995</b> <s>₹1,420</s> (30% off)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing28.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Set of 2 Embroidered Cotton Linen Curtain Grey 108x54 Inch
 <br/><br/>
          <b>₹5,565</b> <s> ₹7,950</s> (30% off)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing29.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Bohemian Throw Pillow Cover<br/><br/>
          <b>&#8377;445</b> <s>&#8377;1,195</s> (63% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing30.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Plain Pillow Cover<br/>
          <b>&#8377;485</b> <s>&#8377;1,310</s>  (63% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing31.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Cushion Cover Natural<br/>
        <b>&#8377;195</b> <s>&#8377;350</s> (44% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing32.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Natural Linen Cushion Cover<br/><br/>
         <b>&#8377;195</b> <s>&#8377;350</s> (44% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW EIGHT ENDED--------------------------------------------------------- */}





{/* ------------------------------------------------------ROW NINE STARTED--------------------------------------------------------- */}
      
<Row>
<Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing33.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Boho Cushion Cover Set Of 2<br/><br/>
          <b>&#8377;530</b> <s>&#8377;950</s> (44% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing34.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Abstract Pillow Cover Set Of 2<br/>
          <b>&#8377;990</b> <s>&#8377;1,200</s>  (18% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing35.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        BOHO Amanda Hand Woven Rug-Grey White Natural<br/>
        <b>&#8377;4,660</b> <s>&#8377;5,750</s> (19% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/furnishing36.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Luxury Embroidered Cushion Cover Red Set Of  2 17x17 Inch<br/><br/>
          <b>&#8377;1,000</b> <s>&#8377;2,720</s> (63% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW NINE ENDED--------------------------------------------------------- */}




     {/* -------------------------------------------------------------THEORY-------------------------------------------------------------------- */}

<small>Soft furnishings are an integral part of any home. With the addition of cushion covers and throw pillows, throw blankets, and a rug, a space can become instantly homely. Our soft furnishings are highlights that will make the aesthetics of your home appealing and lend it a character of its own. Mix and match cushions, doormats, rugs, table mats, coasters, table runners, napkins, throws, and blankets from Nestasia to craft an aesthetic for a welcoming home. The perfect amalgamation of our soft furnishings will create a pleasing atmosphere, and are at the same time comfortable to use and easy to care for. One can also transform the look and feel of the room by simply bringing in some new cushion cover designs in a room, adding a rug, 
  some cute cushions, and a throw blanket from our wide range of soft furnishing products.</small>
  <br/>
  <small>Our rugs exude a pleasant and comfortable vibe which makes them best suited for bedrooms and living rooms. You can now walk around the apartment with a soft and warm feeling under your feet! Our rugs and carpets will fit into the color schemes of all interior spaces. One can also go for floor covering with contrasting designs. A carpet in light and mild hues has a stronger effect on darker floors. On the other hand, a dark carpet is suitable for lighter flooring. The dimensions of the carpet and rugs will also depend on the 
    size of the room. Very large rugs might make a room look smaller.</small>
  <br/>
  <small>Nestasia’s throw blankets are available in a variety of styles and designs. Nestasia also has knitted or crocheted blankets that can be used for adorning a living area, bedroom, balcony, or sitting area. The throw blankets will amp up the couch, sofa, armchair, chair, and a lot more. The knitted throws and crocheted throws can be styled in numerous ways. One can fold the throw blankets or neatly spread them out on the couch or sofa. Another casual way to style the throw blanket 
    is to literally throw it on the couch for a burst of colors and a cozy feel.  </small>
  <br/>
  <small>The throw blankets are all made of 100% natural cotton and wool and can be used in different seasons, also functioning well as a light blanket in cool air conditioning. One may 
    also keep it as their office blanket for the time it’s freezing indoors. </small>
  <br/>

  <br/>
  <br/>
  <h2 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}> Frequently Asked Questions</b></h2>

  
  <p>1. How do I choose cushion covers?</p>
  <small>Cushion covers are the perfect way to easily redecorate the interiors of your room. You can easily choose your cushion covers by choosing the ones that contrast colours of the walls, sofa, or curtains. Nestasia offers a range of cushion covers in an array of colours, patterns, and sizes to suit every home. If you have a minimalistic decor, opt for our solid colour cushion covers while the
     mirror-work cushion covers make for a more traditional addition to the home.</small>
  <br/>
  <br/>

  <p>2.What is the standard size of a cushion cover?</p>
  <small>The most common size and shape for cushion covers are square and the standard size for a cushion cover is 16 inches x 16 inches. The finishing touches for every couch, chair, or bed are cushions. When multiple people are using the same furniture, cushions adorned with our stunning cushion covers can bring some 
    individual comfort, punctuate the colour scheme, and brighten up the interior.</small>
  <br/>
  <br/>

  <p>3. How often should you replace your door mat?</p>
  <small>The door mats by Nestasia can be conveniently washed and cleaned. We would recommend vacuuming the door mats weekly and washing the door mats monthly. It also depends on how much foot traffic is on the door mat; depending on that the mat may be required to be washed more often. Your doormat's sole function is to stop outside dirt and debris from entering your home, 
    thus some regular maintenance is required, such as shaking it out here and wiping it down there.</small>
  <br/>
  <br/>
  
  <p>4. How often should you change kitchen hand towels?</p>
  <small>Depending on how often you use the kitchen towels, you should replace towels at different intervals. It's a good idea to change kitchen towels and washcloths annually or every two years. Our highly-absorbent kitchen towels are easily washable
     and can be placed in the washing machine or hand-washed to remove any stains.</small>
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
