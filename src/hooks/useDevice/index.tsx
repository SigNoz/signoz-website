import dynamic from "next/dynamic";
import { DeviceProps } from "./useDevice";

const Device = dynamic<DeviceProps>(
  () => import("./useDevice").then((e) => e.default),
  {
    ssr: false,
    loading(loadingProps) {
      const { isLoading, error, timedOut } = loadingProps;
      if (isLoading) {
        return <div>Loading</div>;
      }
      if (error || timedOut) {
        return <div>Something Went wrong</div>;
      }
      return null;
    },
  }
);

export default Device;
