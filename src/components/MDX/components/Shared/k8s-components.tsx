import LI from "../LI";
import Paragraph from "../Paragraph";


const K8sComponents = () => {
    return (
        <>

            <Paragraph>Follow the steps on this page to install SigNoz on Kubernetes with Helm. <br /> The SigNoz Helm chart will install the following components into your Kubernetes cluster:<br /> </Paragraph>
            <LI>Query Service (backend service)</LI>
            <LI>Web UI (frontend)</LI>
            <LI>ClickHouse (datastore)</LI>
            <LI>OpenTelemetry collector</LI>
            <LI>Alertmanager</LI>
        </>
    )
}

export default K8sComponents;