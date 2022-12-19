import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CustomTextField from "../Shared/CustomTextField";
import "./style.css";
import useLogin from "./hooks/useLogin";

export default function Login() {
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
    navigate("/signup");
  };

  const submit = () => {
    let data = {
      email: getValues("email"),
      password: getValues("password"),
    };
    login(data);
  };

  return (
    <Box className="login-container">
      <Stack spacing={2}>
        <Typography variant="h5">Welcome !</Typography>
        <CustomTextField
          label={"Email *"}
          type="text"
          name={"email"}
          register={register}
          errors={errors}
          criterions={{
            required: {
              value: true,
              message: "Name cannot be empty",
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
        <Typography variant="subtitle1" gutterBottom component="div">
          Don't have an account ? Sign up <Link onClick={redirect}>Here</Link>
        </Typography>
      </Stack>
    </Box>
  );
}
