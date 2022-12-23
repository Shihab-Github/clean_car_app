import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  AlertColor,
  Box,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import CustomTextField from "../../Shared/CustomTextField";
import DropDown from "../../../shared/UI/DropDown";
import { getYesNoValues } from "../../../utils/helper";
import useCreateCar from "./hooks/useCreateCar";
import useToast from "../../../shared/hooks/useToast";
import { Response } from "../../../interfaces";
import Snackbars from "../../../shared/UI/Snackbar";

export default function CreateCar() {
  const [
    { snackbarOpen, setSnackbarOpen, snackbarMessage, snackbarSeverity },
    setToast,
  ] = useToast();
  const navigate = useNavigate();
  const [saveCar] = useCreateCar();
  const {
    register,
    formState: { errors, isValid },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const submit = () => {
    let data = {
      brand: getValues("brand"),
      build: getValues("build"),
      year: getValues("year"),
      dayPrice: getValues("dayPrice"),
      isFeatured: getValues("isFeatured"),
    };
    let res: Response = saveCar(data);
    if (res.statusCode === 201) {
      setToast(res.successMessage ?? "", "success");
      setTimeout(() => {
        navigate("/employee/cars");
      }, 1000);
    }
  };

  return (
    <>
      <Box>
        <Box display="flex" alignItems="center" mb={3}>
          <Box flexGrow={1}>
            <Typography variant="h5">Create New Car</Typography>
          </Box>
          <Box>
            <Button variant="text">Cancel</Button>
          </Box>
          <Box ml={2}>
            <Button variant="contained" onClick={submit} disabled={!isValid}>
              Save
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box mt={4}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CustomTextField
                type="text"
                label="Brand"
                name="brand"
                errors={errors}
                register={register}
                criterions={{
                  required: {
                    value: true,
                    message: "Brand Name cannot be empty",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                type="text"
                label="Build"
                name="build"
                errors={errors}
                register={register}
                criterions={{
                  required: {
                    value: true,
                    message: "Build cannot be empty",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                type="number"
                label="Build Year"
                name="year"
                errors={errors}
                register={register}
                criterions={{
                  required: {
                    value: true,
                    message: "Build Year cannot be empty",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                type="number"
                label="Day Price (All prices are in USD)"
                name="dayPrice"
                errors={errors}
                register={register}
                criterions={{
                  required: {
                    value: true,
                    message: "Day Price cannot be empty",
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <DropDown
                title="Is this a featured car? Default is 'No'"
                value={"isFeatured"}
                options={getYesNoValues()}
                register={register}
              />
            </Grid>
          </Grid>
        </Box>
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
