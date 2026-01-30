"use client";

import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";

const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

type BreakpointContextType = {
  width: number | null;
  name: keyof typeof BREAKPOINTS;
  isUp: (bp: keyof typeof BREAKPOINTS) => boolean;
  isDown: (bp: keyof typeof BREAKPOINTS) => boolean;
  matches: Record<string, boolean>;
  mounted: boolean;
};

const BreakpointContext = createContext<BreakpointContextType | undefined>(undefined);

export const BreakpointProvider = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  const getBreakpointName = (w: number): keyof typeof BREAKPOINTS => {
    if (w >= BREAKPOINTS["2xl"]) return "2xl";
    if (w >= BREAKPOINTS.xl) return "xl";
    if (w >= BREAKPOINTS.lg) return "lg";
    if (w >= BREAKPOINTS.md) return "md";
    if (w >= BREAKPOINTS.sm) return "sm";
    return "xs";
  };

  const value = useMemo(() => ({
    width,
    name: width ? getBreakpointName(width) : "xs",
    isUp: (bp: keyof typeof BREAKPOINTS) => (width ? width >= BREAKPOINTS[bp] : false),
    isDown: (bp: keyof typeof BREAKPOINTS) => (width ? width < BREAKPOINTS[bp] : false),
    matches: Object.keys(BREAKPOINTS).reduce(
      (acc, k) => ({ ...acc, [k]: width ? width >= BREAKPOINTS[k as keyof typeof BREAKPOINTS] : false }),
      {} as Record<string, boolean>
    ),
    mounted,
  }), [width, mounted]);

  return <BreakpointContext.Provider value={value}>{children}</BreakpointContext.Provider>;
};

export const useBreakpoint = () => {
  const context = useContext(BreakpointContext);
  if (!context) throw new Error("useBreakpoint must be used within BreakpointProvider");
  return context;
};
