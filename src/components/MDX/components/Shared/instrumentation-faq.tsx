import Link from "../Link";
import LI from "../LI";
import UL from "../UL";
import Paragraph from "../Paragraph";
import Heading from "../Heading"

const InstrumentationFAQ = () => {
  return (
    <>
    <Heading type="h2">Frequently Asked Questions</Heading>

      <Paragraph>
        <b>
          1. How to find what to use in `IP of SigNoz` if I have installed
          SigNoz in Kubernetes cluster?
        </b>
        <br />
        Based on where you have installed your application and where you have
        installed SigNoz, you need to find the right value for this. Please use {" "}
        <Link href="/docs/instrumentation/troubleshoot-instrumentation/">
          this grid 
        </Link>
         {" "}to find the value you should use for `IP of SigNoz`
      </Paragraph>

      <Paragraph>
        <b>
          2. I am sending data from my application to SigNoz, but I don&apos;t
          see any events or graphs in the SigNoz dashboard. What should I do?
        </b>{" "}
        <br />
        This could be because of one of the following reasons:
        <UL>
          <LI>
            Your application is generating telemetry data, but not able to
            connect with SigNoz installation
          </LI>
          Please use this{" "}
          <Link href="https://signoz.io/docs/install/troubleshooting/">
            troubleshooting guide
          </Link>{" "}
          to find if your application is able to access SigNoz installation and
          send data to it.
          <LI>Your application is not actually generating telemetry data</LI>
          Please check if the application is generating telemetry data first.
          You can use `Console Exporter` to just print your telemetry data in
          console first. Join our{" "}
          <Link href="https://signoz.io/slack/">Slack Community</Link> if you
          need help on how to export your telemetry data in console
          <LI>Your SigNoz installation is not running or behind a firewall</LI>
          Please double check if the pods in SigNoz installation are running
          fine. `docker ps` or `kubectl get pods -n platform` are your friends
          for this.
        </UL>
      </Paragraph>
    </>
  );
};

export default InstrumentationFAQ;
