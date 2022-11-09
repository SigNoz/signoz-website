import Code from "../Code";
import Link from "../Link";
import Paragraph from "../Paragraph";


const K8sHotrod = () => {
    return (
        <>
            <Paragraph>Follow the steps in this section to install a sample application named <Link href="https://github.com/jaegertracing/jaeger/tree/master/examples/hotrod">HotR.O.D</Link> , and generate tracing data.

                1. Use the HotROD install script below to create a `sample-application` namespace
                and deploy HotROD application on it:

                <Code>
                    curl -sL https://github.com/SigNoz/signoz/raw/main/sample-apps/hotrod/hotrod-install.sh \
                    | HELM_RELEASE=my-release SIGNOZ_NAMESPACE=platform bash
                </Code>

                2. Using the `kubectl -n sample-application get pods` command, monitor the sample application pods.
                Wait for all the pods to be in running state:

                <Code>
                    kubectl -n sample-application get pods
                </Code>

                Output:
                <Code>
                    NAME                            READY   STATUS    RESTARTS   AGE
                    hotrod-55bd58cc8d-mzxq8         1/1     Running   0          2m
                    locust-master-b65744bbf-l7v7n   1/1     Running   0          2m
                    locust-slave-688c86bcb7-ngx7w   1/1     Running   0          2m
                </Code>

                3. Use the following command to generate load:

                <Code>
                    kubectl --namespace sample-application run strzal --image=djbingham/curl \
                    --restart=&apos;OnFailure&apos; -i --tty --rm --command -- curl -X POST -F \
                    &apos;locust_count=6&apos; -F &apos;hatch_rate=2&apos; http://locust-master:8089/swarm
                </Code>

                4. Browse to `http://localhost:3301` and see the metrics and traces for your sample application.


                5. Use the following command to stop load generation:

                <Code>
                    kubectl -n sample-application run strzal --image=djbingham/curl \
                    --restart=&apos;OnFailure&apos; -i --tty --rm --command -- curl \
                    http://locust-master:8089/stop
                </Code>

                Go to <Link href="https://signoz.io/docs/operate/kubernetes">Kubernetes Operate</Link> section for detailed instructions.

            </Paragraph>
        </>
    )
}

export default K8sHotrod;