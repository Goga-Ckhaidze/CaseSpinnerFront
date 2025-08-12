import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function CasePage() {
const { caseId, caseTitle, price } = useParams();
  const location = useLocation();
const displayPrice = price || "$0.00";

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/items/case/${caseId}`)  // only caseId sent to backend
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setItems(data))
      .catch(err => console.error("Fetch error:", err));
  }, [caseId]);

  return (
<>
<h1 className="itemTitle">{caseTitle}</h1>
<p className="casePagePrice">${displayPrice}</p>

<div className="spiningItems">
  <span className="traingles top"><img src="/images/t1.png" className="trainglesImage" alt="" /></span>
  <span className="traingles bottom"><img src="/images/t1.png" className="trainglesImage" alt="" /></span>
  <div className="itemFlexx">
        {items.map(item => (
          <div className="itemDivv" key={item._id}>
            <li className="itemLi">
              <h3 className="weaponTypee">{item.title}</h3>
                <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 87 84'%3E%3Ccircle cx='44' cy='42' r='31' fill='url(%23a)' opacity='.4'/%3E%3Cpath stroke='url(%23b)' stroke-width='2' d='M10.756 24.328 40.5 7.155l29.744 17.173v34.345L40.5 75.845 10.756 58.673z'/%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='0' r='1' gradientTransform='rotate(90 1 43)scale(31)' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23000000' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' x1='76' x2='13.408' y1='41.5' y2='41.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23000000' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                className="backImage"
                alt=""
              />
              <img src={item.image} className="weaponImage" alt={item.title} />
              <h5 className="weaponName">{item.type}</h5>
            </li>
          </div>
        ))}
      </div>
</div>
<div className="center">
      <button className="cut-button move">Spin {displayPrice}</button>
</div>
    <div className="container-1400">

      <h1 className="itemTitle">{caseTitle} Items</h1> {/* Show title from URL */}
      <div className="itemFlex">
        {items.map(item => (
          <div className="itemDiv" key={item._id}>
            <li className="itemLi">
              <h3 className="weaponType">{item.title}</h3>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 87 84'%3E%3Ccircle cx='44' cy='42' r='31' fill='url(%23a)' opacity='.4'/%3E%3Cpath stroke='url(%23b)' stroke-width='2' d='M10.756 24.328 40.5 7.155l29.744 17.173v34.345L40.5 75.845 10.756 58.673z'/%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='0' r='1' gradientTransform='rotate(90 1 43)scale(31)' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23000000' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' x1='76' x2='13.408' y1='41.5' y2='41.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23000000' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                className="backImage"
                alt=""
              />
              <img src={item.image} className="weaponImage" alt={item.title} />
              <h5 className="weaponName">{item.type}</h5>
              <h6 className="weaponModel">{item.model}</h6>
            </li>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default CasePage;
