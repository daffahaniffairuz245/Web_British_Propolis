import { toast } from "react-hot-toast";

const useToast = () => {
  const toastSuccess = (message: string) => toast.success(message);
  const toastError = (message: string = "Terjadi kesalahan!") => toast.error(message);
  const toastWarning = (message: string) => toast(message, { icon: "⚠️" });

  return { toastSuccess, toastError, toastWarning };
};

export default useToast;
