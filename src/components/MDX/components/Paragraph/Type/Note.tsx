import { getTextFromChildren } from "../utils";
import { Props } from "../index";
import Header from "../components/Heading";
import SideBorder from "../components/SideBorder";

const Note = ({ children }: Props) => {
  return (
    <div>
      {getTextFromChildren(children, 'note')}
    </div>
  )
}

export default Note;