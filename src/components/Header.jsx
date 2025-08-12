import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaDiscord, FaPeopleArrows, FaBoxOpen } from "react-icons/fa";
import { GiUpgrade } from 'react-icons/gi';
import { Settings } from 'lucide-react';
import '../App.css'

export default function Header() {
  return (
          <div className="container-1800">
        {/* Top Icons */}
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

        {/* Header */}
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
  )
}
