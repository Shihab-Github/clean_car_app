import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomTextField from "../Shared/CustomTextField";
import DropDown from "../../shared/UI/DropDown";
import Link from "@mui/material/Link";
import { getUserTypes } from "../../utils/helper";
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

  const submit = () => {
    let data = {
      firstName: getValues("firstName"),
      lastName: getValues("lastName"),
      type: getValues("userType"),
      phone: getValues('phone'),
      password: getValues('password'),
      password2: getValues('password2')
    };
    console.log("data: ", data);
  };

  return (
    <>
      <Box className="signup-container">
        <Stack spacing={2}>
          <Typography variant="h5">
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
            type="text"
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
            type="text"
            name={"password2"}
            register={register}
            errors={errors}
            criterions={{
              required: {
                value: true,
                message: "Please retype password",
              },
            }}
            fullWidth
          />
          <Button variant="contained" onClick={submit} disabled={!isValid}>
            Sign Up
          </Button>
          <Typography variant="subtitle1" gutterBottom component="div">
            Already have an account ? Log in{" "}
            <Link sx={{ cursor: "pointer" }} onClick={redirect}>
              Here
            </Link>
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
