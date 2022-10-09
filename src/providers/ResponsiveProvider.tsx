import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import useResizeObserver from "use-resize-observer";

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Responsive = {
  height: number
  width: number
  size: Size
  scrollTop: number
}

const defaultResponsive: Responsive = {
  height: 1,
  width: 1,
  size: 'md',
  scrollTop: 0
};

export const ResponsiveContext = createContext<Responsive>(defaultResponsive);

export const useResponsive = () => {
  return useContext(ResponsiveContext);
};

type ResponsiveContextProviderProps = {
  children: ReactNode
};

const ResponsiveProvider = ({ children }: ResponsiveContextProviderProps) => {
  const { ref: responsiveRef, height = 1, width = 1 } = useResizeObserver<HTMLDivElement>();
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    });
  }, []);

  const value = {
    height,
    width,
    size: evaluateSize(width),
    scrollTop
  };

  return (
    <div ref={responsiveRef}>
      <ResponsiveContext.Provider value={value}>
        {children}
      </ResponsiveContext.Provider>
    </div>
  );
};

export default ResponsiveProvider;

function evaluateSize(width: number): Size {
  if (width < 576) {
    return 'xs';
  }

  if (width < 768) {
    return 'sm';
  }

  if (width < 992) {
    return 'md';
  }

  if (width < 1200) {
    return 'lg';
  }

  return 'xl';
}
