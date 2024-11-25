import React, { useEffect } from "react";
import "./FloatingElements.css";

const FloatingElements = () => {
  useEffect(() => {
    const balls = document.querySelectorAll(".ball");

    document.addEventListener("mousemove", (e) => {
      balls.forEach((ball, index) => {
        const x = (e.clientX + index * 50) % window.innerWidth;
        const y = (e.clientY + index * 50) % window.innerHeight;

        ball.style.transform = `translate(${x}px, ${y}px)`;
        ball.style.backgroundColor = getRandomColor();
      });
    });

    const getRandomColor = () =>
      `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
  }, []);

  return (
    <div className="floating-elements">
      {["Tech", "Future", "Protein", "Beauty", "Health"].map((text, idx) => (
        <div key={idx} className="ball">
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
