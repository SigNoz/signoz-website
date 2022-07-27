/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from "@react-hook/media-query";
import * as React from "react";
import { useContext, createContext } from "react";

const MediaQueryContext = createContext("");

export type DeviceType = "mobile" | "desktop";

interface DeviceProviderProps {
  type: DeviceType;
  children: React.ReactElement;
}

const DeviceTypeProvider =
  typeof window === "undefined"
    ? ({ type, children }: DeviceProviderProps) => (
        <MediaQueryContext.Provider value={type}>
          {children}
        </MediaQueryContext.Provider>
      )
    : ({ children }: DeviceProviderProps) => children;

// For use only in server
const useIsDesktopSSR = () => {
  return useContext(MediaQueryContext) !== "mobile";
};

const useIsDesktop = (minWidth = 768) => {
  if (typeof window === "undefined") {
    return useIsDesktopSSR();
  }
  return useMediaQuery(`only screen and (min-width: ${minWidth}px)`);
};

export { DeviceTypeProvider, useIsDesktop };
