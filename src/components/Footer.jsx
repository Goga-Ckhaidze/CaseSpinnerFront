import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import '../App.css'

export default function Footer() {
  return (
    <>
          <div className="padding"></div>

      <div className="lineDivv"><span className="middleLine"></span></div>
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
