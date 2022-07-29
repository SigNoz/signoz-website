import Title from "components/Title";
import EmailInput from "components/EmailInput";
import Button from "components/Button";
import Card from "components/Card";
import { useCallback, useState } from "react";
import { isValidEmail } from "./utils";
const SubscribeToUpdates = () => {
  const [email, setEmail] = useState<string>("");

  const onClickHandler: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      console.log(email);
    },
    [email]
  );

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      setEmail(event.target.value);
    }, []);

  return (
    <form className="md:max-w-[920px] m-auto" onSubmit={onClickHandler}>
      <Card className="flex gap-4 flex-col md:flex-row p-9">
        <div className="md:flex-1 md:items-center md:flex">
          <Title className="md:text-left text-center line-clamp-2 w-full md:w-2/3">
            Subscribe to receive updates
          </Title>
        </div>
        <div className="md:flex-1">
          <EmailInput
            value={email}
            onChange={onChangeHandler}
            className="md:h-full"
            placeholder="Type your email address"
          />
        </div>
        <div>
          <Button
            disabled={!isValidEmail(email)}
            fullWidth
            type="submit"
            variant="primary"
          >
            Subscribe
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default SubscribeToUpdates;
