// src/pages/CasePage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useCaseStore } from '../store/useCaseStore';
import { cases, secondCases } from "../data/casesData";

function CasePage() {
  const { caseId } = useParams();
  const selectedCase = useCaseStore(state => state.selectedCase);
  const setSelectedCase = useCaseStore(state => state.setSelectedCase);

  const [price, setPrice] = useState(null);
  const [items, setItems] = useState([]);
  const [scrollItems, setScrollItems] = useState([]);
  const containerRef = useRef(null);

  const DEFAULT_ITEM_WIDTH = 120;
  const itemSizeRef = useRef(DEFAULT_ITEM_WIDTH);
  const centerOffsetRef = useRef(0);
  const baseIndexRef = useRef(0);
  const currentTranslateX = useRef(0);

  const [winnerItem, setWinnerItem] = useState(null);
  const [spinning, setSpinning] = useState(false);

  // Load case if navigated by URL
  useEffect(() => {
    if (!selectedCase && caseId) {
      const idNum = parseInt(caseId, 10);
      const foundCase = (cases || []).find(c => c.id === idNum) || (secondCases || []).find(c => c.id === idNum);
      if (foundCase) setSelectedCase(foundCase);
    }
  }, [caseId, selectedCase, setSelectedCase]);

  // Fetch items for selected case
  useEffect(() => {
    if (!selectedCase) return;

    fetch(`http://localhost:5000/items/case/${selectedCase.id}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setItems(data.map(item => ({ ...item, chance: Number(item.chance) })));
          setPrice(null);
        } else if (data && data.price != null && Array.isArray(data.items)) {
          setPrice(Number(data.price));
          setItems(data.items.map(item => ({ ...item, chance: Number(item.chance) })));
        } else {
          setItems([]);
          setPrice(null);
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setItems([]);
        setPrice(null);
      });
  }, [selectedCase]);

  // Prepare repeated scrollItems and measure sizes
  useEffect(() => {
    if (!items.length) return;

    const repeats = 50;
    const extended = [];
    for (let r = 0; r < repeats; r++) {
      for (let it of items) extended.push({ ...it });
    }
    setScrollItems(extended);

    requestAnimationFrame(() => {
      const el = containerRef.current;
      if (!el) return;

      const firstChild = el.children[0];
      const childRect = firstChild ? firstChild.getBoundingClientRect() : { width: DEFAULT_ITEM_WIDTH };
      const itemWidthMeasured = childRect.width || DEFAULT_ITEM_WIDTH;

      const computed = window.getComputedStyle(el);
      const gap = parseFloat(computed.gap || computed.columnGap || 0) || 0;

      const step = itemWidthMeasured + gap;
      itemSizeRef.current = step;

      const containerWidth = el.clientWidth || el.getBoundingClientRect().width || 0;
      const centerOffset = containerWidth / 2 - itemWidthMeasured / 2;
      centerOffsetRef.current = centerOffset;

      // Base index points to the middle of the FIRST chunk to center its first item
      const middleIndex = Math.floor(extended.length / 2) - Math.floor(items.length / 2);
      baseIndexRef.current = middleIndex;

      const initialTranslate = middleIndex * step - centerOffset;
      currentTranslateX.current = initialTranslate;

      el.style.transition = "none";
      el.style.transform = `translateX(-${Math.round(initialTranslate)}px)`;
    });
  }, [items]);

  // Display price format
  const displayPrice = price != null
    ? `$${price.toFixed(2)}`
    : selectedCase
      ? `$${Number(selectedCase.price).toFixed(2)}`
      : "$0.00";

  // Spin function - smooth scroll and lock on winner exactly
  const handleSpin = () => {
    if (!containerRef.current || spinning || !items.length) return;
    setSpinning(true);
    setWinnerItem(null);

    const container = containerRef.current;
    const step = itemSizeRef.current || DEFAULT_ITEM_WIDTH;
    const centerOffset = centerOffsetRef.current || 0;

    const winnerIndex = Math.floor(Math.random() * items.length);
    const winner = items[winnerIndex];

    const repeats = 50;
    const totalItems = items.length;
    const extendedLength = totalItems * repeats;

    // Base index again - center first chunk
    const baseIndex = Math.floor(extendedLength / 2) - Math.floor(totalItems / 2);
    baseIndexRef.current = baseIndex;

    const spinsCount = 5;

    // Start exactly centered on first chunk's middle
    const startTranslateX = (baseIndex + Math.floor(totalItems / 2)) * step - centerOffset;
    currentTranslateX.current = startTranslateX;

    // Calculate final target index and translateX to center winner
    const targetIndex = baseIndex + totalItems * spinsCount + winnerIndex;
    const targetTranslateX = targetIndex * step - centerOffset;

    let startTime = null;
    const duration = 3000;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease out cubic easing
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const newTranslateX = startTranslateX + easeOut * (targetTranslateX - startTranslateX);
      currentTranslateX.current = newTranslateX;

      container.style.transition = "none";
      container.style.transform = `translateX(-${newTranslateX}px)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Snap exactly to winner position (no rounding)
        currentTranslateX.current = targetTranslateX;
        container.style.transform = `translateX(-${targetTranslateX}px)`;

        setSpinning(false);
        setWinnerItem(winner);

        console.log('Winner should be centered at translateX:', targetTranslateX);
        console.log('Winner DOM element index in scrollItems:', targetIndex);
        console.log('container children count:', container.children.length);

        // Highlight the winner DOM element with red outline for debugging
        const winnerElement = container.children[targetIndex];
        if (winnerElement) {
          winnerElement.style.outline = "3px solid red";
          // Optionally scroll winner element into view - visually check alignment
          // winnerElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
      }
    }

    requestAnimationFrame(animate);
  };

  if (!selectedCase) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>No case selected. Please go back and select a case.</p>;
  }

  return (
    <>
      <h1 className="itemTitle">{selectedCase.title}</h1>
      <p className="casePagePrice">{displayPrice}</p>

      <div className="spiningItems">
        <span className="traingles top">
          <img src="/images/t1.png" className="trainglesImage" alt="" />
        </span>
        <span className="traingles bottom">
          <img src="/images/t1.png" className="trainglesImage" alt="" />
        </span>

        <div
          className="itemFlexx"
          ref={containerRef}
          style={{
            overflowX: "hidden",
            whiteSpace: "nowrap",
            willChange: "transform",
            userSelect: "none",
          }}
        >
          {scrollItems.map((item, i) => (
            <div
              className="itemDivv"
              key={`${item._id ?? item.id}-${i}`}
              style={{ display: "inline-block", width: `${itemSizeRef.current || DEFAULT_ITEM_WIDTH}px` }}
            >
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
        <button onClick={handleSpin} className="cut-button move" disabled={spinning}>
          {displayPrice} Spin
        </button>
      </div>

      <div className="container-1400" style={{ marginTop: "40px" }}>
        <h1 className="itemTitle">{selectedCase.title} Items</h1>
        <div className="itemFlex">
          {items.map((item) => (
            <div className="itemDiv" key={item._id ?? item.id}>
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

      {winnerItem && (
        <div
          className="winner-popup"
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0,0,0,0.6)",
            zIndex: 9999,
          }}
        >
          <div
            className="popup-content"
            style={{
              background: "#0f1220",
              color: "white",
              padding: 24,
              borderRadius: 12,
              textAlign: "center",
              minWidth: 280,
            }}
          >
            <h2>🎉 You won: {winnerItem.title}</h2>
            <img src={winnerItem.image} alt={winnerItem.title} style={{ width: 160, height: "auto", margin: "10px 0" }} />
            <p>Type: {winnerItem.type}</p>
            <p>Price: ${winnerItem.price != null ? Number(winnerItem.price).toFixed(2) : "0.00"}</p>
            <button
              onClick={() => setWinnerItem(null)}
              style={{
                marginTop: 12,
                padding: "8px 14px",
                background: "#2b6cff",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CasePage;
