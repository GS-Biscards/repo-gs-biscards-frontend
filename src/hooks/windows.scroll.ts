import React from "react";

export interface WindowSize {
    width: number;
    height: number;
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState<WindowSize>({
        width: 0,
        height: 0
    });

    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize)
    }, []);
    return windowSize
}


export function useScrollListener() {
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y
        };
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return data;
}

export const ScrollContext = React.createContext(null);