import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [startExitAnimation, setStartExitAnimation] = useState(false);

  useEffect(() => {

    const loadTimeout = setTimeout(() => {
      setStartExitAnimation(true);
    }, 10);

  
    let completeTimeout: ReturnType<typeof setTimeout>;
    
    if (startExitAnimation) {
      completeTimeout = setTimeout(() => {
        onComplete();
      }, 500); 
    }

    return () => {
      clearTimeout(loadTimeout);
      if (completeTimeout) clearTimeout(completeTimeout);
    };
  }, [onComplete, startExitAnimation]);


  const sheetStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#000000", 
    zIndex: 9999,
    transition: "transform 1s cubic-bezier(0.77, 0, 0.175, 1)", 
    willChange: "transform",
  };

  return (
    <>
    
      <div
        style={{
          ...sheetStyle,
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
          transform: startExitAnimation ? "translate(-100%, -100%)" : "translate(0, 0)",
        }}
      />

  
      <div
        style={{
          ...sheetStyle,
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          transform: startExitAnimation ? "translate(100%, 100%)" : "translate(0, 0)",
        }}
      />
    </>
  );
};

export default LoadingScreen;