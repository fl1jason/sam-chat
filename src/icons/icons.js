import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faBars,
  faFaceSmile,
  faPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export const IconLogOut = () => {
  return <FontAwesomeIcon icon={faRightFromBracket} />;
};

export const IconSend = () => {
  return <FontAwesomeIcon icon={faPaperPlane} />;
};

export const IconPlus = () => {
  return <FontAwesomeIcon icon={faPlus} />;
};

export const IconMenu = () => {
  return <FontAwesomeIcon icon={faBars} />;
};

export const IconReactions = () => {
  return <FontAwesomeIcon icon={faFaceSmile} />;
};
