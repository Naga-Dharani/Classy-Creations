import { Route, Routes } from "react-router-dom";
import Navbarhead from "./Components/Navbarhead";
import Newin from "./Components/Newin";
import Home from "./Components/Home";
import Dining from "./Components/Dining";
import Bath from "./Components/Bath";
import Decor from "./Components/Decor";
import Festive from "./Components/Festive";
import Kitchen from "./Components/Kitchen";
import Softfurnishing from "./Components/Softfurnishing";
import Glassware from "./Components/Glassware";





function App() {
  return (
    <div >
      <Navbarhead />
      <br/>
      <br/>
      <br/>
      <br/>
      
     
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
       <Route path="/newin" element={<Newin />}/>
       <Route path="/dining" element={<Dining />}/>
       <Route path="/bath" element={<Bath />}/>
       <Route path="/decor" element={<Decor />}/>
       <Route path="/festive" element={<Festive />}/>
       <Route path="/kitchen" element={<Kitchen />}/>
       <Route path="/softfurnishing" element={<Softfurnishing />}/>
       <Route path="/glassware" element={<Glassware />}/>
       
       
       
       
       
      

      </Routes>
    </div>
  );
}

export default App;
