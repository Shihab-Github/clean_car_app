import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomTextField from "../Shared/CustomTextField";
import Link from "@mui/material/Link";
import "./style.css";

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const redirect = () => {
    navigate("/");
  };

  return (
    <>
      <Box className="signup-container">
        <Stack spacing={2}>
          <Typography variant="h5">
            Welcome ! Please sign up so that we can help you get started
          </Typography>
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
          <Button variant="contained" disabled={!isValid}>
            Login
          </Button>
          <Typography variant="subtitle1" gutterBottom component="div">
            Already have an account ? Log in{" "}
            <Link onClick={redirect}>Here</Link>
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
