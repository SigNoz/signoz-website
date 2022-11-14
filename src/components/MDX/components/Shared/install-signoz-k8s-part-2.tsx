import Code from "../Code";
import Paragraph from "../Paragraph";


const InstallSigNozPart2 = () => {
  return (
    <>
      <Paragraph>Output:</Paragraph>
      <Code>
        NAME: my-release <br />
        LAST DEPLOYED: Mon May 23 20:34:55 2022
        <br />
        NAMESPACE: platform
        <br />
        STATUS: deployed
        <br />
        REVISION: 1<br />
        NOTES:
        <br />
        1. You have just deployed SigNoz cluster:
        <br />
        <br />
        - frontend version: &apos;0.8.0&apos;
        <br />
        - query-service version: &apos;0.8.0&apos;
        <br />
        - alertmanager version: &apos;0.23.0-0.1&apos;
        <br />
        - otel-collector version: &apos;0.43.0-0.1&apos;
        <br />- otel-collector-metrics version: &apos;0.43.0-0.1&apos;
      </Code>

      <em>
        Note that the above command installs the latest stable version of
        SigNoz.
      </em>

      <Paragraph>
        Optional) To install a different version, you can use the `--set` flag
        to specify the version you wish to install. The following example
        command installs SigNoz version `0.8.0`:
      </Paragraph>

      <Code>
        helm --namespace platform install my-release signoz/signoz \ <br />
        --set frontend.image.tag=&quot;0.8.0&quot; \ <br />
        --set queryService.image.tag=&quot;0.8.0&quot;
      </Code>

      <Code>
        - If you use the `--set` flag, ensure that you specify the same
        versions for the `frontend` and `queryService` images. Specifying
        different versions could lead the SigNoz cluster to behave abnormally.{" "}
        <br />- Do not use the `latest` or `develop` tags in a production
        environment. Specifying these tags could install different versions of
        SigNoz on your cluster and could lead to data loss.
      </Code>

      <Paragraph>
        5. You can access SigNoz by setting up port forwarding and browsing to
        the specified port. The following `kubectl port-forward` example
        command forwards all connections made to `localhost:3301` to `
        {"<signoz-frontend-service>:3301"}`:
      </Paragraph>

      <Code>
        export SERVICE_NAME=$(kubectl get svc --namespace platform -l
        &quot;app.kubernetes.io/component=frontend&quot; -o jsonpath=&quot;
        {".items[0].metadata.name"}&quot;)
        <br />
        <br />
        kubectl --namespace platform port-forward svc/$SERVICE_NAME 3301:3301
      </Code>
    </>
  );
}

export default InstallSigNozPart2;