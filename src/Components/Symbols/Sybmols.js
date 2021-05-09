import React from 'react';
import './Symbol.css';
import FB from '../../Assets/facebook.svg'
import instagram from '../../Assets/instagram.svg'
import twitter from '../../Assets/twitter.svg'
import linkedin from '../../Assets/linkedin.svg';

const Symbols=()=>(
    <><div className="symbols">
        <span><img alt="social_media"className="FB" src={FB}/></span>
        <span><img alt="social_media"className="insta" src={instagram}/></span>
        <span><img alt="social_media"className="twitter" src={twitter}/></span>
        <span><img alt="social_media"className="linkedin" src={linkedin}/></span>
    </div>

    </>
)


export default Symbols;