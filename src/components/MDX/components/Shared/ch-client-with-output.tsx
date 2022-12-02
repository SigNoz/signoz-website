import Code from "../Code";
import Paragraph from "../Paragraph";

const CHClientWithOutput = () => {
  return (
    <>
      <Paragraph>
        Inside the bash shell, run the following to create clickhouse client:
      </Paragraph>
      <Code>clickhouse client</Code>
      <Paragraph>Output should be similar to this:</Paragraph>
      <Code>
        ClickHouse client version 22.4.5.9 (official build). <br />
        Connecting to localhost:9000 as user default.
        <br />
        Connected to ClickHouse server version 22.4.5 revision 54455.
        <br />
        5c6e8128ba12 :)
      </Code>
    </>
  );
};

export default CHClientWithOutput;
