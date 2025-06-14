import { useEffect, useState } from "react";
import "../css/BackToTopButton.css";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 800);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        className="back-to-top-btn"
        type="button"
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        ↑
      </button>
    )
  );
}

export default BackToTopButton;
