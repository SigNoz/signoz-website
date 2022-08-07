import Button from "components/Button";
import Card from "components/Card";
import Title from "components/Title";
import Image from "next/image";

const OpenTelementryLiveClasses = (): JSX.Element => {
  const onClick = () => {
    console.log("onClick");
  };

  return (
    <div className="flex flex-col md:flex-row m-auto">
      <div className="md:max-w-md md:w-full h-full">
        <Image
          layout="responsive"
          width={400}
          height={300}
          objectFit="cover"
          src={"/images/opentelementry.jpg"}
          alt="opentelementry caption"
        />
      </div>

      <Card className="bg-signoz-medium rounded rounded-tr-none md:rounded-tr rounded-tl-none md:rounded-bl-none md:w-full md:px-14 md:pt-12">
        <Title className="text-white text-2xl md:text-3xl">
          OpenTelemetry Live MasterClasses
        </Title>
        <div className="text-signoz-light mt-4 font-openSans font-light text-base">
          OpenTelemetry can auto-instrument your Java Spring Boot application
        </div>
        <div className="mt-8">
          <Button onClick={onClick} variant="primary">
            Sign up for free
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default OpenTelementryLiveClasses;
