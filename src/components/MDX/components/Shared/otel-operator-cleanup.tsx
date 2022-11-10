import Code from "../Code";
import Paragraph from "../Paragraph";


const OtelOperatorCleanUp = () => {
    return (
        <>
            <Paragraph>
                At last, we can clean it all up:
                <br />
                To remove spring-petclinic deployment:

            </Paragraph>

            <Code>
                kubectl delete deployment/spring-petclinic
            </Code>

            <Paragraph>
                To remove OpenTelemetry Instrumentation:
            </Paragraph>

            <Code>
                kubectl delete instrumentation/my-instrumentation
            </Code>
        </>
    )
}

export default OtelOperatorCleanUp;