import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  // State to track scroll position
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const checkScrollPosition = () => {
    if (window.scrollY > 100) {
      setIsVisible(true); // Show button if scrolled more than 100px
    } else {
      setIsVisible(false); // Hide button if scrolled back to the top
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={styles.button}
      >
        ↑ 
      </button>
    )
  );
};

// Inline styles for the button
const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#00000D',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    transition: 'opacity 0.3s ease',
  },
};

export default ScrollToTopButton;
