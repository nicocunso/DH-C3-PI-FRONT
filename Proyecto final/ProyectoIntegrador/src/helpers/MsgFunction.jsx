import { toast } from "react-toastify";

const config = {
  position: "top-center",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const MsgFunction = (msg, type) => {
  if (type === "error") {
    toast.error(msg, config);
  } else if (type === "success") {
    toast.success(msg, config);
  } else if (type === "info") {
    toast.info(msg, config);
  } else {
    return;
  }
};
