import { toast } from "sonner";

export const toastSuccess = (msg: string) => {
  toast.success(msg, {
    style: {backgroundColor: "#16A34A", color: "#fff",borderColor:"#fff"},
    icon: "✔️",
  });
};

export const toastError = (msg: any) => {
  toast.error(msg, {
    style: {backgroundColor: "#8B0000", color: "#fff",borderColor:"#fff"},
    icon: "🚨",
  });
};