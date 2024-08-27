import { useState, useEffect } from "react";

export const useResponsiveMaxLength = (defaultLength: number) => {
  const [maxLength, setMaxLength] = useState(defaultLength);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024 && width <= 1440) {
        setMaxLength(10);
      } else if (width < 1024) {
        setMaxLength(30);
      } else {
        setMaxLength(defaultLength);
      }
    };

    // Initialize maxLength based on the current window size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [defaultLength]);

  return maxLength;
};
