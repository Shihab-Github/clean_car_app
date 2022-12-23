import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomTextField from "../Shared/CustomTextField";
import DropDown from "../../shared/UI/DropDown";
import Link from "@mui/material/Link";
import useToast from "../../shared/hooks/useToast";
import { getUserTypes } from "../../utils/helper";
import useSignUp from "./hooks/useSignUp";
import { AlertColor } from "@mui/material";
import Snackbars from "../../shared/UI/Snackbar";
import "./style.css";

export default function SignUp() {
  const [
    { snackbarOpen, setSnackbarOpen, snackbarMessage, snackbarSeverity },
    setToast,
  ] = useToast();
  const [{ signUp }] = useSignUp();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const redirect = (path: string) => {
    navigate(path);
  };

  const submit = () => {
    let data = {
      firstName: getValues("firstName"),
      lastName: getValues("lastName"),
      type: getValues("userType"),
      phoneNumber: getValues("phoneNumber"),
      password: getValues("password"),
      password2: getValues("password2"),
    };
    const res = signUp(data);
    if (res.statusCode === 201) {
      setToast(res.successMessage ? res.successMessage : "", "success");
      setTimeout(() => {
        redirect("/");
      }, 1000);
    } else {
      setToast(res.errorMessage ? res.errorMessage : "", "error");
    }
  };

  return (
    <>
      <Box className="signup-container">
        <Stack spacing={2}>
          <Typography variant="h5" textAlign="center">
            Welcome ! Please sign up so that we can help you get started
          </Typography>
          <CustomTextField
            label={"First Name *"}
            type="text"
            name={"firstName"}
            register={register}
            errors={errors}
            criterions={{
              required: {
                value: true,
                message: "First Name cannot be empty",
              },
            }}
            fullWidth
          />
          <CustomTextField
            label={"Last Name *"}
            type="text"
            name={"lastName"}
            register={register}
            errors={errors}
            criterions={{
              required: {
                value: true,
                message: "Last Name cannot be empty",
              },
            }}
            fullWidth
          />
          <DropDown
            title="Are you a Customer or an employee?"
            value={"userType"}
            options={getUserTypes()}
            register={register}
            criterions={{
              required: {
                value: true,
                message: "User Type Name cannot be empty",
              },
            }}
          />
          <CustomTextField
            label={"Phone Number*"}
            type="number"
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
            label={"Password*"}
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
          <CustomTextField
            label={"Re-type Password*"}
            type="password"
            name={"password2"}
            register={register}
            errors={errors}
            criterions={{
              required: {
                value: true,
                message: "Please retype password",
              },
              validate: (val: string) => {
                if (watch("password") != val) {
                  return "Your passwords do not match";
                } else {
                  return true;
                }
              },
            }}
            fullWidth
          />
          <Button variant="contained" onClick={submit} disabled={!isValid}>
            Sign Up
          </Button>
          <Typography
            textAlign="center"
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            Already have an account ? Log in{" "}
            <Link sx={{ cursor: "pointer" }} onClick={() => redirect("/")}>
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
