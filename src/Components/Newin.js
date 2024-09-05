import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {FaEnvelope,FaPhoneAlt,FaShoppingBag } from "react-icons/fa";


export default function Newin() {
  return (
    <div>
      <Container>
        <img src={ require("../assets/media/images/carousel1.webp")} width="100%" alt=""/> 
        <br/>
        <br/>

        <h4 style={{color:"#9354ab"}}>Newly Launched</h4>
        <p>What's new? Explore all our latest launches and newest collections, all in one place.</p>

        <Row>
        <Col className='text-center'><img src={ require("../assets/media/images/TERACOTTA.webp")} width="100%" alt=""/><p>TERACOTTA</p></Col>
        <Col className='text-center'><img src={ require("../assets/media/images/tray.webp")} width="100%" alt=""/><p>TRAY</p></Col>
        <Col className='text-center'><img src={ require("../assets/media/images/new1.webp")} width="100%" alt=""/><p>TABLEWARE</p></Col>
        <Col className='text-center'><img src={ require("../assets/media/images/Storage.webp")} width="100%" alt=""/><p>SUSTAINABLE<br/>STORAGE</p></Col>
        <Col className='text-center'><img src={ require("../assets/media/images/DEVOTION.webp")} width="100%" alt=""/><p>DEVOTION</p></Col>
        <Col className='text-center'><img src={ require("../assets/media/images/candle.webp")} width="100%" alt=""/><p>CANDLES</p></Col>
        <Col className='text-center'><img src={ require("../assets/media/images/floormat.webp")} width="100%" alt=""/><p>FLOORMAT</p></Col>
        <Col className='text-center'><img src={ require("../assets/media/images/fountset.webp")} width="100%" alt=""/><p>FONDUE SET</p></Col>
        <Col className='text-center'><img src={ require("../assets/media/images/notebook.webp")} width="100%" alt=""/><p>NOTEBOOK</p></Col>
        <Col className='text-center'><img src={ require("../assets/media/images/jars.webp")} width="100%" alt=""/><p>JARS</p></Col>
      </Row>

       
      <br/>
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
      <Card.Img variant="top" src={ require("../assets/media/images/devotion1.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Shreenathji Tealight Candle Holder  
          <b>&#8377;995</b><s>&#8377;1,530</s>(35%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/devotion2.jpg")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Radha Krishna Pure Brass Tealight Candle Holder
          <b>&#8377;995</b><s>&#8377;1,530</s>(35%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/devotion3.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Laxmi Ganesh Metal Tealight Candle Holder Set Of 2
        <b>&#8377;1,990</b><s>&#8377;3,060</s>(35%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/devotion4.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Laxmi and Ganpati Pure Brass Idol Set Of 24cm
          <b>&#8377;1,115</b><s>&#8377;1,800</s>(38%OFF)
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
      <Col>
      
      </Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/devotion5.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Pure Brass Ram Darbar Brass Statue 10cm 
          <b>&#8377;5,050</b><s>&#8377;7,650</s>(34%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/devotion6.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Shivling Brass Showpiece For Puja Room 5cm
          <b>&#8377;950</b><s>&#8377;1,440</s>(34%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/devotion7.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Simhavasini Goddess Durga Idol For Praver Room 9cm
        <b>&#8377;1,195</b><s>&#8377;1,800</s>(34%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/devotion8.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Brass Step  Decorative Flower Diya Stand Set OF 2 Gold
          <b>&#8377;1,850</b><s>&#8377;2,790</s>(34%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    </Row>
    <br/>
    <br/>

     {/* ------------------------------------------------------ROW TWO ENDED--------------------------------------------------------- */}


     {/* ------------------------------------------------------ROW THREE STARTED--------------------------------------------------------- */}
      
     <Row>
      <Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/floormat1.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Set Of 2 Circular Frilled Cotton Floor Mats 23 Inch
            <b>&#8377;995</b><s>&#8377;1,530</s>(35%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/floormat2.jpg")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Set Of 3 Crochet Bordered Cotten Floor Mats 20x21 Inch
          <b>&#8377;1,650</b><s>&#8377;2,520</s>(35%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/floormat3.jpg")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Plush Crochet Cotten Door Mats Set Of 2 29x21 Inch
        <b>&#8377;1,090</b><s>&#8377;1,710</s>(36%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/floormat4.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Frilled Design Soft Floor Mat Set Of 2 24X16 Inch
          <b>&#8377;1,090</b><s>&#8377;1,710</s>(36%OFF)
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
      <Card.Img variant="top" src={ require("../assets/media/images/floormat5.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Set Of Tufted Pure Cotton Door Mat Blue 24X16 Inch  
          <b>&#8377;1,090</b><s>&#8377;1,710</s>(36%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/floormat6.jpg")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Pure Cotton Handwoven Twilled Soft Floor Mat Set Of 2 31x17...
          <b>&#8377;1,050</b><s>&#8377;1,620</s>(35%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/floormat7.jpg")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Set Of 2 Handwoven Ribbed Twill Plush Cotton Door Mats Blue..
        <b>&#8377;1,050</b><s>&#8377;1,620</s>(35%OFF)
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/floormat8.jpg")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Grey High Absorbent Handcrafted Cotton Floor Mat..
         <b>&#8377;1,050</b><s>&#8377;1,620</s>(35%OFF)
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
<Col>
</Col>
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
     {/* ------------------------------------------------------ROW FIVE ENDED--------------------------------------------------------- */}


    {/* ------------------------------------------------------ROW SIX STARTED--------------------------------------------------------- */}
      
<Row>
<Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/dining13.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Set Of Stars And Comet Ceramic Sereware With Tray<br/>
          <b>&#8377;1,590</b> <s>&#8377;2,430</s> (35% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/dining14.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Leaf Ceramic Bowls And Long Plate Set of 4 With Tray<br/>
          <b>&#8377;1,550</b> <s>&#8377;2,340</s>  (34% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/dining15.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        3 Section Leafy Ceramic Plate With Wooden Tray<br/>
        <b>&#8377;990</b> <s>&#8377;1,530</s> (35% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/dining16.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Maple Leaf Serving Bowl With Wooden Cultery And Tray..<br/>
          <b>&#8377;1,890</b> <s>&#8377;2,880</s> (34% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/glass21.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Juice Glass Tumbler Set of 2<br/>
          <b>&#8377;690</b>    <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/glass22.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Tall Square Glass Set of 2<br/>
          <b>&#8377;590</b>    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/glass23.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
       Double Wall Glass Cup<br/><br/>
        <b>&#8377;290</b>    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/glass24.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Glass Ice Cream Dessert Bowl Set Of 6 120ml<br/>
          <b>&#8377;650</b>   <s>₹980</s> (34% OFF) <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW SIX ENDED--------------------------------------------------------- */}



      {/* ------------------------------------------------------ROW EIGHT STARTED--------------------------------------------------------- */}
      
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
     {/* ------------------------------------------------------ROW EIGHT ENDED--------------------------------------------------------- */}






     {/* ----------------------------------------------------------theory--------------------------------------------------------- */}

    <h4 ><b style={{fontFamily:"-moz-initial",color:"#9354ab",wordSpacing:"5px"}}>Fresh Finds For Your Space - Explore Our Latest Home Decor Arrivals</b></h4>
    <br/>
    <small style={{wordSpacing:"3px"}}>With Nestasia’s fresh edits, your home with our new arrivals in home decor effortlessly blends style, elegance, and functionality. Our fresh home decor collection is curated to cater to diverse tastes,
       featuring everything from bold statement pieces to minimalist accents that add a subtle charm to any room. Imagine your living space adorned with unique vases, stylish wall art, cosy throws, and exquisite decorative items 
       that reflect your personality and taste. Whether you're looking to revamp your entire home or simply update a corner, our new home decoration items online offer the perfect solutions. Dive into our latest home decor items 
       today and find those perfect pieces that will turn your house into a warm, inviting sanctuary where style
       meets comfort. Embrace the new season with a refreshed and rejuvenated space that you'll love coming home to every day. Buy new arrival products for home decor from our website and create the home of your dreams.</small>

    <br/>
    <br/>   
    <h4><b style={{fontFamily:"-moz-initial",color:"#9354ab",wordSpacing:"5px"}}>Discover Unique Styles: Modern, Boho, Quirky & More!</b></h4>
    <br/>
    <small style={{wordSpacing:"3px"}}>Explore the vibrant world of home decor new arrivals with Nestasia, where unique styles come to life. Whether you’re drawn to the clean lines of modern design, the eclectic charm of boho chic,
       or the playful vibe of quirky decor, Nestasia has something for every taste.</small>
       <br/>
       <br/>
  
       <h4><b style={{fontFamily:"-moz-initial",color:"#9354ab",wordSpacing:"5px"}}>Modern Elegance</b></h4>
       <br/>
       <small style={{wordSpacing:"3px"}}>Embrace simplicity and sophistication with our modern decor items. Think sleek furniture, minimalistic art pieces, and neutral tones that create a calm and orderly space. Perfect for
         those who appreciate contemporary design with a touch of elegance.</small>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>


{/* ---------------------------------------------------TABLE---------------------------------------------------------------------- */}

         <h2 style={{fontFamily:"-moz-initial",color:"#9354ab"}}>New In Pricing</h2>


    <table cellpadding="10px" cellspacing="10px">
      <tr >
        <th>Product Name</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>Decorative Glass Bowls Set of 5 With Rotating Metal Stand</td>
        <td>4650</td>
      </tr>
      <tr>
        <td>Decorative Crystal Glass Platter With Metal Stand</td>
        <td>2550</td>
      </tr>
      <tr>
        <td>Shimmer Crystal Glass 2 Tier Snack Stand</td>
        <td>1590</td>
      </tr>
      <tr>
        <td>Luxurious Large Decorative Metal Tray</td>
        <td>1650</td>
      </tr>
      <tr>
        <td>Pure Kansa Single Person Dinner Set Of 5 With Gift Box</td>
        <td>7950</td>
      </tr>
      <tr>
        <td>Pure Brass Filter Coffee Tumbler Davara Set For 2 People</td>
        <td>1490</td>
      </tr>
      <tr>
        <td>Large Pure Kansa Serving Bowl With Lid And Ladle 1300ml</td>
        <td>7190</td>
      </tr>
    </table>

    <br/>
  <br/>
  <br/>
  <br/>
   



    {/* ---------------------------------------------------------------lines---------------------------------------------------------------------- */}
    
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

 <h5 style={{fontFamily:"-moz-initial",color:""}}>Popular Searches</h5>
 <br/>
 <h6 style={{fontFamily:"-moz-initial",color:""}}>Tote Bags | Marble Dinnerset | Chef Decor | Tissue Box | Bowls With Chopsticks | Bread Plate | Leaf Platter | Nitori Side Bowl | Bathroom Set | Lunch Bag | Incense Diffuser | Modern Cutlery Set | Vera Black Plates 
  | House Plant Pots | Angel Decor | Scoop Spoon</h6>






  </Container>


  <br/>
  <br/>
  <br/>
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

  <div  className='row py-4 ' >
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
