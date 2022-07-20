import { isDesktop, isMobile } from "react-device-detect";

interface DeviceDetection {
  isMobile: boolean;
  isDesktop: boolean;
}

const useDevice = (): DeviceDetection => ({
  isMobile,
  isDesktop,
});

import React, { ReactElement, useLayoutEffect, useRef, useState } from "react";

export interface DeviceProps {
  desktop?: boolean;
  mobile?: boolean;
  children: ReactElement;
}

const Device = ({ desktop, mobile, children }: DeviceProps): JSX.Element => {
  const { isMobile } = useDevice();
  const [isMobileState, setIsMobileState] = useState<boolean>(isMobile);
  const resizeTimer = useRef<NodeJS.Timeout>();

  function resizeThrottled() {
    setIsMobileState(window.innerWidth <= 768);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(resizeThrottled, 100);
    });

    return () => {
      window.removeEventListener("resize", resizeThrottled);
    };
  }, []);

  return (isMobileState && mobile) || (!isMobileState && desktop) ? (
    children
  ) : (
    <React.Fragment />
  );
};

export default Device;
