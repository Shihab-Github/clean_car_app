import { useState } from "react";

const useToast = () => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const setToast = (msg: string, severity: string) => {
    setSnackbarOpen(true);
    setSnackbarMessage(msg);
    setSnackbarSeverity(severity);
  };

  return [
    {
      snackbarOpen,
      setSnackbarOpen,
      snackbarMessage,
      snackbarSeverity,
    },
    setToast,
  ] as const;
};

export default useToast;
