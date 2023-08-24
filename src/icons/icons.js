import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faBars,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

export const IconSend = () => {
  return <FontAwesomeIcon icon={faPaperPlane} />;
};

export const IconMenu = () => {
  return <FontAwesomeIcon icon={faBars} />;
};

export const IconReactions = () => {
  return <FontAwesomeIcon icon={faFaceSmile} />;
};
