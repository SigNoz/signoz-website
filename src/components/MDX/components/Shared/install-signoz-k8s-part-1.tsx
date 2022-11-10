import Code from "../Code";
import Paragraph from "../Paragraph";

const InstallSigNozPart1 = () => {
  return (
    <>
      <Paragraph>
        1. Add the SigNoz Helm repository to your client with name `signoz` by
        running the following command:
      </Paragraph>
      <Code>helm: repo add signoz https://charts.signoz.io</Code>
      <Paragraph>
        2. Verify that the repository is accessible to the Helm CLI by entering
        the following command:
      </Paragraph>
      <Code>helm repo list</Code>
      <Paragraph>
        3. Use the `kubectl create ns` command to create a new namespace. SigNoz
        recommends you use `platform` for your new namespace:
      </Paragraph>

      <Code>kubectl create ns platform</Code>
      <Paragraph>
        4. Run the following command to install the chart with the release name
        `my-release` and namespace `platform`:
      </Paragraph>
    </>
  );
};

export default InstallSigNozPart1;
