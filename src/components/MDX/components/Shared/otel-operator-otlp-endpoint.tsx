import Code from "../Code";
import Paragraph from "../Paragraph";


const OtelOperatorOTLPEndpoint = () => {
    return (
        <>
            <Code>
                If you have SigNoz running in other Kubernetes (K8s) cluster or in a Virtual Machine (VM),
                you should update the `endpoint` property to point at the appropriate OTLP address.
            </Code>
        </>
    )
}

export default OtelOperatorOTLPEndpoint;