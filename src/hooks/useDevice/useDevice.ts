import { isDesktop, isMobile } from "react-device-detect";

interface DeviceDetection {
  isMobile: boolean;
  isDesktop: boolean;
}

const useDevice = (): DeviceDetection => ({
  isMobile,
  isDesktop,
});

import { ReactNode, useLayoutEffect, useRef, useState } from "react";

export interface DeviceProps {
  desktop?: boolean;
  mobile?: boolean;
  children: ReactNode;
}

const Device = ({
  desktop,
  mobile,
  children,
}: DeviceProps): ReactNode | null => {
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

  return (isMobileState && mobile) || (!isMobileState && desktop)
    ? children
    : null;
};

export default Device;
