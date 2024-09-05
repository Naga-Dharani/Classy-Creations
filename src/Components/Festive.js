import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {FaEnvelope,FaPhoneAlt,FaShoppingBag } from "react-icons/fa";




export default function Festive() {
  return (
    <div>

<Container>
        <img src={ require("../assets/media/images/carousel1.webp")} width="100%" alt=""/> 
        <br/>
        <br/>

        <h4 style={{color:"#BFBFBF"}}>Newly Launched</h4>
        <p>What's new? Explore all our latest launches and newest collections, all in one place.</p>

        


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
      <Card.Img variant="top" src={ require("../assets/media/images/festive1.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Moroccan Decorative Metal Lantern Sage Green  <br/>        
          <b>₹995</b>  <s>&#8377;1,350</s>  (26%OFF)           <FaShoppingBag />
          
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive2.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Navy Blue Moroccan Candle Holder Lantern Set Of 2<br/>
          <b>&#8377;595</b> <s>&#8377;810</s>  (27% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive3.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Geometric Cutwork Lantern Lavender Set Of 2<br/>
        <b>&#8377;650</b> <s>&#8377;900</s> (28% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive4.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Set Of 2 Festive Charm Lanterns With Metal Cutwork<br/>
          <b>&#8377;695</b> <s>&#8377;990</s> (30% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/festive5.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Modern Matte Beige Leaf Cutwork Metal Lantern Set Of 2<br/>
          <b>&#8377;1,950</b> <s>&#8377;2,785</s> (30% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive6.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
          Muted Baby Pink Metal Cutwork Hurricane Lantern Set Of 2<br/>
          <b>&#8377;1,950</b> <s>&#8377;2,785</s>  (30% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive7.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Matte Taupe Leaves Cutwork Metal Lantern Set Of 2<br/>
        <b>&#8377;1,950</b> <s>&#8377;2,785</s> (30% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive8.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Lord Ganesh Idol<br/><br/>
          <b>&#8377;625</b> <s>&#8377;1,250</s> (50% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/festive9.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Aloha Delights Gift Hamper Set 4<br/><br/>
          <b>&#8377;1,780</b> <s>&#8377;2,380</s> (25% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive10.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Festive Gift Hamper Set Of 5<br/><br/>
          <b>&#8377;3,230</b> <s>&#8377;4,630</s>  (30% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive11.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Festive Tealight Candle Holder Set Of 3<br/>
        <b>&#8377;845</b> <s>&#8377;1,210</s> (30% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive12.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Tealight Candle Holder With Cutwork Set Of 2<br/>
          <b>&#8377;575</b> <s>&#8377;820</s> (30% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/candle.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Set Of 2 Unicorn Lavender Super Soft Bamboo Towels<br/>
          <b>&#8377;849</b> <s>&#8377;1,590</s> (47% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/candle1.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Floral Gold Double Wick Scented Candle Set Of 2<br/>
          <b>&#8377;1,550</b> <s>&#8377;2,340</s>  (34% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/candle2.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Lemon Mojito Aromatic Tealight Candle Set Of 30<br/>
        <b>&#8377;450</b> <s>&#8377;720</s> (38% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/candle4.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Taper Candles Sage Green With Gold Design Set Of 8<br/>
          <b>&#8377;595</b> <s>&#8377;900</s> (34% OFF)   <FaShoppingBag />
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
      <Card.Img variant="top" src={ require("../assets/media/images/festive13.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Set Of 2 Elephant Candle Holder With Tea Lights<br/>
          <b>&#8377;480</b> <s>&#8377;720</s> (33% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive14.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Set Of 2 Mandala Wooden Block Candle Tea Light Holder<br/>
          <b>&#8377;480</b> <s>&#8377;720</s>  (33% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive15.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Wooden Block Decorative Candle Holder Set Of 2<br/>
        <b>&#8377;480</b> <s>&#8377;720</s> (33% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive16.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Set Of 2 Square Block Wooden Tea Light Holder<br/>
          <b>&#8377;480</b> <s>&#8377;720</s> (33% OFF)   <FaShoppingBag />
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

     {/* ------------------------------------------------------ROW SIX ENDED--------------------------------------------------------- */}


{/* ------------------------------------------------------ROW SEVEN STARTED--------------------------------------------------------- */}
      
<Row>
<Col></Col>
      <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive17.webp")} width="100%"fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Lotus Wooden Wall Hangings Set Of 8<br/><br/>
          <b>&#8377;1,590</b> <s>&#8377;2,430</s> (35% OFF)   <FaShoppingBag />
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive18.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Ring And Bell Sola Flower Wall Hanging Set Of 6<br/>
          <b>&#8377;2,450</b> <s>&#8377;3,690</s>  (34% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive19.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
        Sustainable Dried Flowers Decor Set Of 2<br/>
        <b>&#8377;4,250</b> <s>&#8377;6,390</s> (33% OFF)    <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col><Card style={{ width:'100%',border:"none" }}>
      <Card.Img variant="top" src={ require("../assets/media/images/festive20.webp")} width="100%" fluid alt=""/>
      <Card.Body>
        <Card.Text>
         Rose Dried Flower Decoration Set Of 3<br/><br/>
          <b>&#8377;4,990</b> <s>&#8377;7,560</s> (34% OFF)   <FaShoppingBag />
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
    </Row>
    <br/>
    <br/>
     {/* ------------------------------------------------------ROW SEVEN ENDED--------------------------------------------------------- */}






     {/* ------------------------------------------------THEORY--------------------------------------------------------------------------------- */}

     <h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab",wordSpacing:"5PX"}}>Elevate your decoration with unique & luxury festive decoration items</b></h5>
     <small style={{wordSpacing:"3px"}}>Love, laughter, and timeless memories - the festive season brings with itself a bundle of joy that we wait for every year. Indian festive seasons are vibrant and colourful. No festive season is complete without proper decor
       or lighting, be it a chandelier, a table lamp, or simply fairy lights - they add charm to the festivities at home. Choosing the right kind of soft furnishings for home decoration during the festive season is also important. Colourful and vibrant cushions, 
       soft throws and rugs, decorating with fresh blooms, or simply garnering artificial flowers in beautiful ceramic vases - all add to the elegance of the festive home. 
       <br/>
       Adding refreshing aromas and scents is a great way to elevate spirits during the festive season. Scented candles, potpourri, reed diffusers, and oil lamps are some of the many ways to enhance the ambience at home. </small>
       <br/>
       <br/>
       <h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab"}}>Unique decoration items for this festive season</b></h5>

       <small style={{wordSpacing:"3px"}}><b>Living room festive decoration items:</b> Make your living room look welcoming and warm this festive season. Putting up fairy lights, draping soft and pretty curtains, decorating flowers and ornaments in exquisite vases, and putting up beautiful wall decor and abstract wall art are great ways of hosting your party in style. Shop for festival decoration items from Nestasia this festive season and make your home look festive-ready.
<br/>
<b>Bedroom festive decoration items: </b>This festive season, consider decorating your bedroom by placing indoor planters, hanging beautiful tapestries and wall art, hanging mirrors, etc. to enhance the positivity of your bedroom during the festive season. Scented candles are another great festival decoration item for your bedroom. It pleases all our senses and makes us calm and relaxed. Choose shades that pop out for your cushion covers for a lively look. Explore the entire range of bedroom festive decor items at Nestasia today.
<br/>
<b>Kitchen and dining festive decoration items:</b> From mirrors to crockery units, glass makes your home look sophisticated and chic. This festive season, dazzle your guests with the right pieces of dinnerware. From plates to platters, fetching exquisite pieces of dinnerware for the home decor is an elaborate yet exciting task. Dress up your table with beautiful dinner sets and dinnerware from Nestasia to keep the festive feel intact. Be it dessert plates, serving plates, trays, cutlery, bar tools, table mats, table napkins, etc., we have everything you need to host a memorable brunch or dinner.
<br/>
<b>Study and office festive decor items:</b> Add a jolt of your personality to the least utilized room of your house - your study. Add a pop of colour to your study with the vibrant decor elements from Nestasia. Turn your study into an aesthetically pleasing room by incorporating decor elements like a retro book stand, antique howling showpiece, elegant photo frames, artificial flowers in ceramic vases, etc. Shop for your favourite decoration items online on Nestasia and create a beautiful space at home.
<br/>
<b>Outdoor festive decor items: </b>The onset of the festive season brings along bright-spirited cheer, good vibes, positivity, and lots of happiness. It is the ideal time and occasion to give your home a festive makeover. From gardens and patios in bungalows and independent houses to balconies or even the windowsills or ledges of apartments, the outdoors work as the perfect canvas for any Diwali decoration idea. </small>
<br/>
<br/>

<h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}>Explore luxury Diwali gifts & hampers online</b></h5>
<small style={{wordSpacing:"3px"}}>Our thoughtfully selected Diwali gift items collection offers a fascinating choice of options, whether you're wanting to surprise your family,
   friends, or coworkers. Each carefully put-together Diwali gift hamper conveys a sense of craftsmanship and love.</small>
   <br/>
   <br/>
   <br/>


   <h5 ><b style={{fontFamily:"-moz-initial",color:"#9354ab" ,wordSpacing:"5PX"}}>Check out luxury gift items online at Nestasia</b></h5>
   
   <small style={{wordSpacing:"3px"}}>Be it an intimate get-together, a wedding, or a housewarming party, gifts are a great way of conveying your warm wishes and love to your loved ones. Below, we have listed Nestasia’s luxurious gifting 
    items that are sure to bring a smile to your loved ones' faces.</small>
    <br/>
    <small style={{wordSpacing:"3px"}}><b>Birthdays:</b> Make the special day of your loved ones extra special with our exquisite collection of handcrafted birthday gifts. From cups and mugs to wall art and wall decor objects, Nestasia has an amazing gifting collection that is sure to make your loved ones smile.
<br/>
    <b>Weddings:</b> Looking for the best gift for the newly married happy couple? Look no further! Nestasia has got you covered. With time, people have started to resort to gifts that add a more personal touch. We have a huge collection of customized, handcrafted gifts that are sure to leave your loved ones teary-eyed. We have gifting items like dinner sets, platters, coffee mug sets, perfectly curated gift hampers, home decor objects, and much more that are going to serve as unique wedding gifts.
<br/>
    <b>Anniversaries: </b>Anniversaries are a great way to commemorate your love and bond with your partner. From newly married couples to those celebrating their silver jubilee together, anniversaries are a reminder of the vows and love that you promised to your significant other. Therefore, to celebrate this special day, the anniversary gifts take particular consideration. Nestasia has a wide range of anniversary gifts to fulfill the purpose of adding sentimental value to your special anniversary gifts. Duffle bags, photo frames, makeup organiser, scarf, snack bowls, etc. are some of the most loved gifts that can be given to your significant other on the auspicious occasion of your wedding anniversary.
<br/>
    <b>Housewarming:</b> Moving into a new house is a big step. A thoughtful housewarming gift from friends and family goes a long way during a period that can be equal parts stressful and exciting. Celebrate the big move of your loved ones with Nestasia’s practical yet personalized presents. Nestasia has a magnificent collection of indoor planters that can also be used as decorative objects at home. Scented candles are another amazing gifting item that can be given to your loved one, as their aroma enhances the overall ambience of the place and creates a sense of calm and relaxation.
<br/>
    <b>Baby Showers: </b>Babies are a blessing. The best baby shower gifts are items that parents will actually use. Shop for tote bags, travel pouches, organizers, and cute table decor objects to give the gift of joy to the would-be mother along with your warm wishes. </small>

    
    
    
    
    
    
    
    
    
    
    
  {/* ------------------------------------------------------------TABLE--------------------------------------------------------------   */}
    <br/>
    <br/>
    <br/>
     <h2 style={{fontFamily:"-moz-initial",color:"#9354ab"}}>New In Pricing</h2>


<table style={{backgroundColor:"red",color:"white"}}>
  <tr>
    <th  style={{paddingLeft:"50px"}}>Product Name</th>
    <th>Price</th>
  </tr>
  <tr>
    <td style={{padding:"50px"}}>Decorative Glass Bowls Set of 5 With Rotating Metal Stand</td>
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
