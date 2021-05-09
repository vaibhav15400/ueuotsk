import React from "react";
import { useEffect, useRef } from 'react';
import AOS from "aos";
import "./Body.css";
import "aos/dist/aos.css";
import copper from "../../Assets/copper.webp";
import top from "../../Assets/top.mp4";
import ReactPlayer from "react-player";
import cowboy from "../../Assets/cowboy.webp";
import dorsia from "../../Assets/Dorsia.webp";
import bropbox from "../../Assets/dropbox.webp";
import googlesanta from "../../Assets/googlesanta.webp";
import learmotion from "../../Assets/learmotion.webp";
import Lonely_Plant from "../../Assets/Lonely_Plant.webp";
import redbull from "../../Assets/redbull.webp";
import zero from "../../Assets/zero.png";
import Reuters from "../../Assets/Reuters.webp";
import slack_video from "../../Assets/slack_video.mp4";
import verve_video from "../../Assets/verve_video.mp4";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import ArrowRightSharpIcon from "@material-ui/icons/ArrowRightSharp";
const Body = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const vedioRef = useRef();
  useEffect(() => {
      vedioRef.current.play();
  }, []); 
  return (
    <>
      {" "}
      <div className="main_head">
        <div data-aos="fade-up"
        data-aos-offset="-500"
        data-aos-delay="500"
        data-aos-duration="9"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
          <div className={"f1"}>Featured Projects</div>
          <div className={"u1"}>Uber Design</div>
          <div className={"l1"}>Looking Under The Hood</div>
          <div className="ani">
            <a href="#porject" style={{ textDecoration: "none" }}>
              <button className="button">More Project</button>
              <div className="arrow">
                <ArrowDropDownSharpIcon />
              </div>
            </a>
          </div>
        </div>
        <div className="mix">
          <div className="ved">
                {/* <video
                    poster={top}
                    playsinline
                    autoplay
                    muted
                    ref={vedioRef}
                    src={top}
                    className="ved"
                    height="630px"
                    width="630px" 
                ></video>*/}
            <ReactPlayer url={top} loop={true} playing={true} />
          </div>
        </div>
      </div>
      <div style={{ width: "90%" }}>
        <div className="lineo">
          <div className="line">
            Ueno is a full-service agency, busy designing <br />
            and building beautiful digital products, brands,
            <br /> and experiences.
          </div>
        </div>
        <div className="ani1">
          <div className="arrow1">
            <ArrowRightSharpIcon />
          </div>
          <button className="button1">More Project</button>
        </div>
      </div>
      <div className="a2">
        <div className="a1">
          All work, all play
          <br />
          Selected projects
        </div>
      </div>
      <div>
        <div className="main_body">
          <div className="mar">
            <div className="mar" id="porject">
              <div className="name" style={{paddingTop:'90px'}}>
                <img className="imgk"
                  src={copper}
                  alt={copper}
                  style={{ height: "630px", width: "630px" }}
                />
                <h2>Copper</h2>
              </div>
            </div>
            <div data-aos="fade-up" className="mar">
              <div className="name">
                <img className="imgk"
                  src={cowboy}
                  alt={cowboy}
                  style={{ height: "630px", width: "630px" }}
                />
                <h2>COW BOY</h2>
              </div>
            </div>
            <div data-aos="fade-up" className="mar">
              <div className="name" style={{paddingTop:'90px'}}>
                <img className="imgk"
                  src={dorsia}
                  alt={dorsia}
                  style={{ height: "630px", width: "630px" }}
                />
                <h2>Dorsia</h2>
              </div>
            </div>
            <div data-aos="fade-up" className="mar">
              <div className="name">
                <img className="imgk"
                  src={bropbox}
                  alt={bropbox}
                  style={{ height: "630px", width: "630px" }}
                />
                <h2>Dropbox</h2>
              </div>
            </div>
            <div data-aos="fade-up" className="mar">
              <div className="name" style={{paddingTop:'90px'}}>
                <img className="imgk"
                  src={googlesanta}
                  alt={googlesanta}
                  style={{ height: "630px", width: "630px" }}
                />
                <h2>Googlesanta</h2>
              </div>
            </div>
            <div data-aos="fade-up" className="mar">
              <div className="name">
                <img className="imgk"
                  src={learmotion}
                  alt={learmotion}
                  style={{ height: "630px", width: "630px" }}
                />
                <h2>learmotion</h2>
              </div>
            </div>
            <div data-aos="fade-up" className="mar">
              <div className="name" style={{paddingTop:'90px'}}>
                <img className="imgk"
                  src={Lonely_Plant}
                  alt={Lonely_Plant}
                  style={{ height: "630px", width: "630px" }}
                />
                <h2>Lonely_Plant</h2>
              </div>
            </div>
            <div data-aos="fade-up" className="mar">
              <div className="name">
                <img className="imgk"
                  src={redbull}
                  alt={redbull}
                  style={{ height: "630px", width: "630px" }}
                />
                <h2>redbull</h2>
              </div>
            </div>
            <div data-aos="fade-up" className="mar">
              <div className="name" style={{paddingTop:'90px'}}>
                <img className="imgk"
                  src={zero}
                  alt={zero}
                  style={{ height: "630px", width: "630px" }}
                />
                <h2>zero</h2>
              </div>
            </div>
            <div data-aos="fade-up" className="mar">
              <div className="name">
                <img className="imgk"
                  src={Reuters}
                  alt={Reuters}
                  style={{ height: "630px", width: "630px" }}
                />
                <h2>Reuters</h2>
              </div>
            </div>
            <div>
             <ReactPlayer
              style={{paddingTop:'90px'}}
                data-aos="fade-down"
                width="630px"
                height="630px"
                url={slack_video}
                loop={true}
                autoplay={true}
                alt={slack_video}
                playing={true}
              /> 
              {/* <video
                data-aos="fade-up"
                    poster={slack_video}
                    playsInline
                    loop
                    muted
                    ref={vedioRef}
                    src={slack_video}
                    className="name"
                    height="630px"
                    width="630px"
                ></video> */}
              <div className="name">
                <h2>Slack Vedio</h2>
              </div>
            </div>
            <div>
            <video
                data-aos="fade-up"
                    poster={verve_video}
                    playsinline
                    autoplay
                    loop
                    muted
                    ref={vedioRef}
                    src={verve_video}
                    className="name"
                    height="630px"
                    width="630px"
                ></video>
             
              <div >
                <h2>Verve Vedio</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
