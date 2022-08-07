import getIcons from "asset/icons";
import Button from "components/Button";
import Card from "components/Card";
import Input from "components/Input";
import { useCallback, useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      setValue(event.target.value);
    }, []);

  return (
    <Card className="absolute items-center flex-row -bottom-9 transform -translate-x-1/2 left-2/4 flex">
      <Input
        className="h-10 md:w-[500px] rounded-r-none"
        value={value}
        onChange={onChangeHandler}
        placeholder="Type what you’re looking for"
      />
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
