import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CustomTextField from "../Shared/CustomTextField";
import useToast from "../../shared/hooks/useToast";
import Snackbars from "../../shared/UI/Snackbar";
import "./style.css";
import useLogin from "./hooks/useLogin";
import { AlertColor } from "@mui/material";
import { Credentials } from "../../interfaces";
import { User } from "../../Domain/Model/User/User";

export default function Login() {
  const [
    { snackbarOpen, setSnackbarOpen, snackbarMessage, snackbarSeverity },
    setToast,
  ] = useToast();
  const navigate = useNavigate();
  const [{ login }] = useLogin();
  const {
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const redirect = () => {
    navigate("/register");
  };

  const submit = () => {
    let data: Credentials = {
      phoneNumber: Number(getValues("phoneNumber")),
      password: getValues("password"),
    };
    let res = login(data);
    if (res.statusCode === 400) {
      setToast(res.errorMessage ?? "", "error");
    } else {
      let user = res.payload as User;
      if (user.type === "customer") {
        navigate("/customer/dashboard");
      } else {
        navigate("/employee/customers");
      }
    }
  };

  return (
    <>
      <Box className="login-container">
        <Stack spacing={2}>
          <Typography variant="h5" textAlign={"center"}>
            Welcome !
          </Typography>
          <CustomTextField
            label={"Phone Number *"}
            type="text"
            name={"phoneNumber"}
            register={register}
            errors={errors}
            criterions={{
              required: {
                value: true,
                message: "Phone Number cannot be empty",
              },
            }}
            fullWidth
          />
          <CustomTextField
            label={"Password *"}
            type="password"
            name={"password"}
            register={register}
            errors={errors}
            criterions={{
              required: {
                value: true,
                message: "Password cannot be empty",
              },
            }}
            fullWidth
          />
          <Button variant="contained" onClick={submit} disabled={!isValid}>
            Login
          </Button>
          <Typography
            textAlign={"center"}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            Don't have an account ? Sign up{" "}
            <Link
              sx={{ cursor: "pointer" }}
              underline="always"
              onClick={redirect}
            >
              Here
            </Link>
          </Typography>
        </Stack>
      </Box>
      <Snackbars
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity as AlertColor}
      />
    </>
  );
}
