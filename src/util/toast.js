import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message) => toast(message);

export const Toast = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};
