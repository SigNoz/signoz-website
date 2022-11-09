import Image from "../Image";
import Paragraph from "../Paragraph";
import ZoomImage from "../ZoomImage";

const AddPanel = () => {
    return (
        <>
            <Paragraph>On a new or existing dashboard select the <b>Add Panel</b> button. Then, select <b>Time Series</b>:</Paragraph>
            <ZoomImage 
                image="./../../images/docs/add-panel-time-series.png"
                alt=""
                />
        </>
    )
}

export default AddPanel;