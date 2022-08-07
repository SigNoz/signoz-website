import Title from "components/Title";
import EmailInput from "components/Input";
import Button from "components/Button";
import Card from "components/Card";
import { useCallback, useState } from "react";
import { isValidEmail } from "./utils";
import sendSubscribeEmail from "api/sendSubscribeEmail";

const SubscribeToUpdates = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onClickHandler: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);
      await sendSubscribeEmail({
        email,
      });
      setLoading(false);
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
            disabled={!isValidEmail(email) || loading}
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
