import { useState, useEffect } from "react";

const headerTop = () => {
    var wrapper = document.querySelector(".wrapper");
    if (wrapper !== null) {
      if (document.getElementById("header") != null) {
        var header_h = document.getElementById("header").offsetHeight;
        wrapper.style.paddingTop = header_h + "px";
      }
    }
  };


const UseMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

// use: (It return true or false) 
// const isMobile = UseMediaQuery('(max-width: 768px)');
  
  
export { headerTop, UseMediaQuery };
  