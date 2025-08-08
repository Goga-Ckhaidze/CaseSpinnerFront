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

    <div className="container-1800">
      <div className="caseFlex">
        <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Plague Case</h2>
          <img src="/images/case4.png" alt="" className="caseImage" />
          <p className="price">83.00$</p>
        </div>
        <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Ninja Case</h2>
          <img src="/images/case5.png" alt="" className="caseImage" />
          <p className="price">83.00$</p>
        </div>
        <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Cursed Case</h2>
          <img src="/images/case2.png" alt="" className="caseImage" />
          <p className="price">83.00$</p>
        </div>
        <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Gemstone Case</h2> 
          <img src="/images/case3.png" alt="" className="caseImage" />
          <p className="price">83.00$</p>
        </div>
        <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Neon Case</h2>
          <img src="/images/case1.png" alt="" className="caseImage" />
          <p className="price">83.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p> className="price"00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
        </div>
        <img src="/images/background.png" className="background" alt="" />
        <div className="caseFlex">
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
                <div className="w_20">
          <span className="edgeLeft"></span>
          <span className="edgeRight"></span>
          <h2 className="caseTitle">Unknown Case</h2>
          <img src="/images/case0.png" alt="" className="caseImage" />
          <p className="price">00.00$</p>
        </div>
      </div>
    </div>

    <div className="footer">
      <div className="container-1800-2">
        <div className="footerFlex">
      <div className="w-25-2 z">
        <div className="logoDivv">
          <img src="images/logoo.png" alt="" className="footerLogo" />
          <h1 className="footerTitles h1">CaseSpinner</h1>
          </div>
          <h3 className="icons i"><FaFacebookF /></h3>
          <h3 className="icons i"><FaTwitter /></h3>
          <h3 className="icons i"><FaInstagram /></h3>
          <h3 className="icons i"><FaDiscord /></h3>
      </div>
      <div className="w-25-2">
        <h2 className="footerTitles pt">Navigation</h2>
        <p className="footerText">Cases</p>
        <p className="footerText">Upgrader</p>
        <p className="footerText">Exchanger</p>
      </div>
      <div className="w-25-2">
        <h2 className="footerTitles pt">Information</h2>
        <p className="footerText">Terms of service</p>
        <p className="footerText">Privacy policy</p>
        <p className="footerText">About cases</p>
      </div>
      <div className="w-25-2">
        <h2 className="footerTitles pt">Help</h2>
        <p className="footerText">Provably Fair</p>
        <p className="footerText">Take a breack</p>
        <p className="footerText">Support</p>
      </div>
      </div>
      </div>
            <div className="lineDivv"><span className="middleLine"></span></div>
            <div className="container-1800-3">
              <h2 className="copyright">Copyright © 2025</h2>
            </div>
    </div>

    </>
  )
}

export default Main