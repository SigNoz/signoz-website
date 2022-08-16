import Button from "components/Button";
import Card from "components/Card";
import { useIsDesktop } from "hooks/useDeviceType";
import cx from "classnames";
import DocSearchContainer from "components/DocSearch";

const SearchBar = () => {
  const isDesktop = useIsDesktop();

  return (
    <Card
      className={cx(
        "absolute items-center flex-row -bottom-9 transform -translate-x-1/2 left-2/4 flex",
        {
          "w-[95%]": !isDesktop,
        }
      )}
    >
      <DocSearchContainer />
      <Button
        className="rounded-l-none text-base h-10 font-light leading-6 px-2 py-3 flex justify-center items-center"
        variant="primary"
      >
        Search
      </Button>
    </Card>
  );
};

export default SearchBar;
