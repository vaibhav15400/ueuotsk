import React from "react";
import './Footer.css';
import loc from '../../Assets/placeholder.png';
const Footer = () => (
  <><div className="kat">
    <div className='l2' style={{padding:' 0  120px'}}>Join us</div><div className='l3' style={{padding:' 0  120px'}}> Open positions</div>
    <ul className='loaction'>
        <li className='ln1'><div style={{display:'flex'}}><img src={loc} height='50px' width='50px' alt ='loc'/><div><div>San Francisco</div> <div>No open positions</div></div></div> </li>
        <li className='ln1'><div style={{display:'flex'}}><img src={loc} height='50px' width='50px' alt ='loc'/><div><div>New York</div> <div>No open positions</div></div></div> </li>
        <li className='ln1'><div style={{display:'flex'}}><img src={loc} height='50px' width='50px' alt ='loc'/><div><div>Reykjavík</div> <div>No open positions</div></div></div> </li>
        <li className='ln1'><div style={{display:'flex'}}><img src={loc} height='50px' width='50px' alt ='loc'/><div><div>Los Angeles</div> <div>No open positions</div></div></div> </li>
        
    </ul>
    <hr className="HR"></hr>
    </div>

  </>
);
export default Footer;