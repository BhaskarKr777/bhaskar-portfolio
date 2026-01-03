import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const mainRef = useRef(null);
  const trail1Ref = useRef(null);
  const trail2Ref = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = [0, 0, 0];
    let currentY = [0, 0, 0];

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Speed factors for each sphere (higher = faster follow)
      const speeds = [0.2, 0.1, 0.05];
      const refs = [mainRef, trail1Ref, trail2Ref];

      for (let i = 0; i < 3; i++) {
        // Linear interpolation logic for smooth tracking
        currentX[i] += (mouseX - currentX[i]) * speeds[i];
        currentY[i] += (mouseY - currentY[i]) * speeds[i];

        if (refs[i].current) {
          refs[i].current.style.transform = `translate3d(${currentX[i]}px, ${currentY[i]}px, 0) translate(-50%, -50%)`;
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div ref={mainRef} className="cursor-sphere main" />
      <div ref={trail1Ref} className="cursor-sphere trail-1" />
      <div ref={trail2Ref} className="cursor-sphere trail-2" />
    </>
  );
};

export default Cursor;