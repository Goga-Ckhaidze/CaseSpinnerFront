import { useNavigate } from "react-router-dom";
import { useCaseStore } from "../store/useCaseStore"; // import your store
import '../App.css';

function Main() {
  const navigate = useNavigate();
  const setSelectedCase = useCaseStore((state) => state.setSelectedCase);

  const cases = [
    { title: "Neon Case", img: "case1.png", price: 15.00, id: 1 },
    { title: "Gemstone Case", img: "case3.png", price: 23.99, id: 2 },
    { title: "Plague Case", img: "case4.png", price: 89.50, id: 3 },
    { title: "Ninja Case", img: "case5.png", price: 230.00, id: 4 },
    { title: "Cursed Case", img: "case2.png", price: 300.00, id: 5 },
    ...Array(10).fill({ title: "Unknown Case", img: "case0.png", price: 0, id: 0 }),
  ];

  const secondCases = [
    { title: "Neon Case", img: "case1.png", price: 15.00, id: 1 },
    { title: "Gemstone Case", img: "case3.png", price: 23.99, id: 2 },
    { title: "Plague Case", img: "case4.png", price: 89.50, id: 3 },
    { title: "Ninja Case", img: "case5.png", price: 230.00, id: 4 },
    { title: "Cursed Case", img: "case2.png", price: 300.00, id: 5 },
  ];

  const handleCaseClick = (caseItem) => {
    setSelectedCase(caseItem);
    navigate(`/case/${caseItem.id}`);
    
  };

  return (
    <>
      {/* Banner */}
      <div className="banner">
        {/* ... your banner code ... */}
      </div>

      {/* Case Grid */}
      <div className="container-1800">
        <div className="caseFlex">
          {cases.map((item, i) => (
            <div className="w_20" key={i}>
              <div
                className="caseWrapper"
                onClick={() => handleCaseClick(item)}
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
                <p className="price">${item.price.toFixed(2)}</p>
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
                onClick={() => handleCaseClick(item)}
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
                <p className="price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
