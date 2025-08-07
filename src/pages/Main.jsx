import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaDiscord, FaPeopleArrows, FaUpload, FaBoxOpen } from "react-icons/fa";
import { GiUpgrade } from 'react-icons/gi';
import { Settings } from 'lucide-react';
import '../App.css';

function Main() {
  return (
    <>
    <div className="container-1800">
    <div className="topFlex">
        <div className="w_50">
            <div className="fiveDiv"></div>
            <div className="fiveDiv"></div>
            <div className="fiveDiv"></div>
            <div className="fiveDiv"></div>
            <div className="fiveDiv"></div>
        </div>
        <div className='w_50 iconsDiv'>
            <h3 className="icons"><FaFacebookF /></h3>
            <h3 className="icons"><FaTwitter /></h3>
            <h3 className="icons"><FaInstagram /></h3>
            <h3 className="icons"><FaLinkedinIn /></h3>
            <h3 className="icons"><FaYoutube /></h3>
            <h3 className="icons"><FaTiktok /></h3>
            <h3 className="icons"><FaDiscord /></h3>
            <h3 className="icons lastIcon"><FaPeopleArrows /></h3>
        </div>
    </div>

    <div className="header">
        <div className="w-50">
      <img src="/images/logoo.png" alt="Logo" className="logo" />
      <h1 className="logoTitle"><FaBoxOpen className="headerIcon1" /> CaseSpinner</h1>
      <h1 className="logoTitle"><GiUpgrade className="headerIcon2" />Upgrade</h1>
      </div>
      <div className="w-50 right">
      <Settings className="spinningGear" />
      <div className="line"></div>
        <button className="cut-button">Login</button>
      </div>
      </div>
    </div>
    
    <div className="banner">
      <img src="/images/banner.avif" alt="banner" className="bannerImage" />
      <div className="onBanner">
        <h4 className="bannerTitle">EVENT ENDS IN</h4>
        <div className="timerDiv">
          <span className="edgeLeft"></span>

          <div className="timeBlock">
          <h3 className="time">48</h3>
          <span className="date">Days</span>
          </div>

          <div className="line"></div>

          <div className="timeBlock">
          <h3 className="time">48</h3>          
          <span className="date">Hours</span>
          </div>

          <div className="line"></div>

          <div className="timeBlock">
          <h3 className="time">48</h3>
          <span className="date">Minutes</span>

          <div className="edgeRight"></div>
          </div>
          </div>
          <button className="cut-button eventButton">Check Event</button>
      </div>
    </div>

    </>
  )
}

export default Main