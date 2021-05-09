import React from "react";
import './WhatsNew.css';
import { useEffect, useRef } from 'react';
import person from "../../Assets/person.mp4";


const WhatsNew = () =>{
    const vedioRef = useRef();
    useEffect(() => {
        vedioRef.current.play();
    }, []); 
    return(<>
        <div className='w1'>
                <div className='w3'>What’s new? Our blog and news</div>
                <div className='w2'>
                        <ul className='w4'>
                            <li>Jan 06 .BLOG</li>
                            <li>24,895 hour</li>
                            <li>  Read More</li>
                        </ul><hr/>
                        <ul className='w4'>
                            <li>Oct 19 News</li>
                            <li>Figma wanted our CEO's <br/>insights for some reason</li>
                            <li>Read More</li>
                        </ul><hr/>
                        <ul className='w4'>
                            <li>Oct 19 News</li>
                            <li>This Guy Really<br/> won't Shut-up</li>
                            <li>Read More</li>
                        </ul><hr/>
                </div>
        </div>
        <div className='p1'>
        <video
                    poster={person}
                    playsinline
                    autoplay
                    muted
                    ref={vedioRef}
                    src={person}
                    className="p1"
                ></video>
                </div>
  </>
);}


export default WhatsNew;
