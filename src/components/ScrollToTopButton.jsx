import React, { useState, useEffect } from "react";
import { ArrowBarUp } from "react-bootstrap-icons";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <ArrowBarUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
