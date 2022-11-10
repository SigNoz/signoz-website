import Code from "../Code";
import Link from "../Link";
import Paragraph from "../Paragraph";
import ZoomImage from "../ZoomImage";

const OtelOperatorPetClinic = () => {
  return (
    <>
      <Paragraph>
        To obtain name of the Pet Clinic pod:
        <Code>
          export POD_NAME=$(kubectl get pod -l app=spring-petclinic -o<br />
          jsonpath=&quot;{".items[0].metadata.name"}&quot;)
        </Code>
        To forward port `8080` of the Pet Clinic pod:
        <Code>kubectl port-forward ${"POD_NAME"} 8080:8080</Code>
        Now, let&apos;s use Pet Clinic UI for a while in browser to generate
        telemetry data:{" "}
        <Link href="http://localhost:8080">http://localhost:8080 </Link>
        <ZoomImage
          image={"/img/docs/otel-operator-spring-pet-clinic.png"}
          alt="GraphiQL IDE"
          caption="Spring Pet Clinic metrics page."
        />
      </Paragraph>
    </>
  );
};

export default OtelOperatorPetClinic;
