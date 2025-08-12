import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaDiscord, FaPeopleArrows, FaBoxOpen } from "react-icons/fa";
import { GiUpgrade } from 'react-icons/gi';
import { Settings } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import '../App.css';

function Main() {
  const navigate = useNavigate();

  const cases = [
    { title: "Neon Case", img: "case1.png", price: "15.00$", id: 1 },
    { title: "Gemstone Case", img: "case3.png", price: "23.99$", id: 2  },
    { title: "Plague Case", img: "case4.png", price: "89.50$", id: 3 },
    { title: "Ninja Case", img: "case5.png", price: "230.00$", id: 4  },
    { title: "Cursed Case", img: "case2.png", price: "300.00$", id: 5  },
    ...Array(10).fill({ title: "Unknown Case", img: "case0.png", price: "00.00$", id: 0 }),
  ];

  const secondCases = [
    { title: "Neon Case", img: "case1.png", price: "15.00$", id: 1 },
    { title: "Gemstone Case", img: "case3.png", price: "23.99$", id: 2  },
    { title: "Plague Case", img: "case4.png", price: "89.50$", id: 3  },
    { title: "Ninja Case", img: "case5.png", price: "230.00$", id: 4  },
    { title: "Cursed Case", img: "case2.png", price: "300.00$", id: 5  },
  ];

const handleCaseClick = (caseId, caseTitle, casePrice) => {
  navigate(`/case/${caseId}/${encodeURIComponent(caseTitle)}/${encodeURIComponent(casePrice)}`);
};

  return (
    <>
      {/* Banner */}
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

      {/* Case Grid */}
      <div className="container-1800">
        <div className="caseFlex">
          {cases.map((item, i) => (
            
            <div className="w_20" key={i}>
              <div
                className="caseWrapper"
                onClick={() => handleCaseClick(item.id, item.title, item.price)}
                style={{ cursor: "pointer" }}
              >
                <video
                  src="/images/fire.mp4"
                  className="caseFireVideo"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
                <span className="edgeLeft"></span>
                <span className="edgeRight"></span>
                <h2 className="caseTitle">{item.title}</h2>
                <img src={`/images/${item.img}`} alt={item.title} className="caseImage" />
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <img src="/images/background.png" className="background" alt="background" />

        {/* Second Case Grid */}
        <div className="caseFlex">
          {secondCases.map((item, i) => (
            <div className="w_20" key={i}>
              <div
                className="caseWrapper"
                onClick={() => handleCaseClick(item.id, item.title, item.price)}
                style={{ cursor: "pointer" }}
              >
                <video
                  src="/images/fire.mp4"
                  className="caseFireVideo"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
                <span className="edgeLeft"></span>
                <span className="edgeRight"></span>
                <h2 className="caseTitle">{item.title}</h2>
                <img src={`/images/${item.img}`} alt={item.title} className="caseImage" />
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Main;
