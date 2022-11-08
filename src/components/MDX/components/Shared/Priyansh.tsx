import Paragraph from "../Paragraph";
import Code from "../Code";
import Image from "../Image";
import ZoomImage from "../ZoomImage";

const AddTimeSeries = () => {
  return (
    <>
      <Paragraph>
        On a new or existing dashboard select the <strong>Add Panel </strong>
        button. Then
      </Paragraph>
      <Code>
        git clone -b main https://github.com/SigNoz/signoz.git && cd
        signoz/deploy/
      </Code>
      <ZoomImage
        alt="alt of the image"
        image="https://avatars.githubusercontent.com/u/88981777?s=40&v=4"
        caption="=asd"
      />
    </>
  );
};

export default AddTimeSeries;
