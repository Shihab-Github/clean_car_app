import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomTextField from "../../Shared/CustomTextField";
import DropDown from "../../../shared/UI/DropDown";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { getYesNoValues } from "../../../utils/helper";
import useCreateCar from "./hooks/useCreateCar";
import { Response } from "../../../interfaces";

export default function CreateCar() {
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
    let response: Response = saveCar(data);
  };

  return (
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
            />
          </Grid>
          <Grid item xs={4}>
            <CustomTextField
              type="number"
              label="Year"
              name="year"
              errors={errors}
              register={register}
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
  );
}
