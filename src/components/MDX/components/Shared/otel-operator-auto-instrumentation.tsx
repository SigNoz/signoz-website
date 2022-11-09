import Code from "../Code";
import Paragraph from "../Paragraph";


const OtelOperatorAutoInstrumentation = () => {
    return (
        <>
            <Code>
                We can enable auto-instrumentation to the deployed workloads by simply adding
                `instrumentation.opentelemetry.io/inject-{'language'}` pod annotations.
            </Code>
        </>
    )
}

export default OtelOperatorAutoInstrumentation;