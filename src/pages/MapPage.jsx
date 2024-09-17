import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Map.css";

export default function MapPage() {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleLinkClick = (id, event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    setTimeout(() => {
      navigate('/projects', { state: { levelId: id } }); // Use navigate to send the state
    }, 100); // Small delay to ensure lines are drawn
  };

  useEffect(() => {
    const boxes = document.querySelectorAll(".map-but-one");
    const svg = document.querySelector('svg');
    const svgNS = 'http://www.w3.org/2000/svg';

    function getMidpoint(el) {
      const rect = el.getBoundingClientRect();
      const midX = rect.left + rect.width / 2 + window.pageXOffset;
      const midY = rect.top + rect.height / 2 + window.pageYOffset;
      return { x: midX, y: midY };
    }

    function drawLines() {
      if (!svg) return;

      const points = Array.from(boxes).map(box => getMidpoint(box));
      svg.innerHTML = ''; // Clear existing lines

      for (let i = 0; i < points.length - 1; i++) {
        const line = document.createElementNS(svgNS, 'line');
        line.setAttribute('x1', points[i].x);
        line.setAttribute('y1', points[i].y);
        line.setAttribute('x2', points[i + 1].x);
        line.setAttribute('y2', points[i + 1].y);
        line.setAttribute('stroke', '#d4d4d47b');
        line.setAttribute('stroke-width', '3');
        svg.appendChild(line);
      }
    }

    // Draw lines initially
    drawLines();

    // Redraw lines on window resize or scroll
    window.addEventListener("resize", drawLines);
    window.addEventListener("scroll", drawLines);

    // Cleanup function: Remove event listeners on unmount
    return () => {
      window.removeEventListener("resize", drawLines);
      window.removeEventListener("scroll", drawLines);
    };
  }, []); // Ensure dependencies array is empty for componentDidMount behavior

  return (
    <>
      <div className="map-grid">
        <div className="map-levelone">
          <Link to="/projects" onClick={(event) => handleLinkClick(1, event)} className="flex items-center">
            <div className="map-but-one">
              <h3>Level 1</h3>
            </div>
          </Link>
        </div>
        <div className="map-leveltwo">
          <Link to="/projects" onClick={(event) => handleLinkClick(2, event)} className="flex items-center">
            <div className="map-but-one">
              <h3>Level 2</h3>
            </div>
          </Link>
        </div>
        <div className="map-levelthree">
          <Link to="/projects" onClick={(event) => handleLinkClick(3, event)} className="flex items-center">
            <div className="map-but-one">
              <h3>Level 3</h3>
            </div>
          </Link>
        </div>
        {/* Continue for other levels */}
        <div className="map-levelfour">
          <Link to="/projects" onClick={(event) => handleLinkClick(4, event)} className="flex items-center">
            <div className="map-but-one">
              <h3>Level 4</h3>
            </div>
          </Link>
        </div>
        <div className="map-levelfive">
          <Link to="/projects" onClick={(event) => handleLinkClick(5, event)} className="flex items-center">
            <div className="map-but-one">
              <h3>Level 5</h3>
            </div>
          </Link>
        </div>
        <div className="map-levelsix">
          <Link to="/projects" onClick={(event) => handleLinkClick(6, event)} className="flex items-center">
            <div className="map-but-one">
              <h3>Level 6</h3>
            </div>
          </Link>
        </div>
        <div className="map-levelseven">
          <Link to="/projects" onClick={(event) => handleLinkClick(7, event)} className="flex items-center">
            <div className="map-but-one">
              <h3>Level 7</h3>
            </div>
          </Link>
        </div>
      </div>
      <svg className="map-svg"></svg>
    </>
  );
}