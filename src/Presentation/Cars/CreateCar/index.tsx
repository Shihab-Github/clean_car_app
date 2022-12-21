import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomTextField from "../../Shared/CustomTextField";
import DropDown from "../../../shared/UI/DropDown";
import { getYesNoValues } from "../../../utils/helper";
import useCustomerDropdown from "../../../shared/hooks/useCustomerDropdown";

export default function CreateCar() {
  const [customers] = useCustomerDropdown();
  const {
    register,
    formState: { errors, isValid },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
  });

  console.log("customers: ", customers);

  return (
    <Box>
      <Typography variant="h5">Create New Car</Typography>

      <Box mt={3}>
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
              label="Day Price"
              name="dayPrice"
              errors={errors}
              register={register}
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
