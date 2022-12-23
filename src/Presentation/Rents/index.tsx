import useFetchRents from "./hooks/useFetchRents";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";

export default function Rents() {
  const [rents] = useFetchRents();

  if (rents.length === 0) {
    return (
      <>
        <Typography mb={2} variant="h4">
          Rent History
        </Typography>
        <Typography mb={2} variant="body1">
          No Cars has been rented yet
        </Typography>
      </>
    );
  }

  return (
    <>
      <Typography mb={2} variant="h4">
        Rent History
      </Typography>
      <Grid container>
        {rents.map((rent) => (
          <Grid item xs={4}>
            <Paper elevation={3}>
              <Box p={2}>
                <Box display="flex" gap={1}>
                  <Typography component="div" fontWeight="bold">
                    Rent ID:
                  </Typography>
                  <Typography component="div">{rent.id}</Typography>
                </Box>
                <Box display="flex" gap={1}>
                  <Typography component="div" fontWeight="bold">
                    Car:
                  </Typography>
                  <Typography component="div">{`${rent.car.brand} - ${rent.car.build}`}</Typography>
                </Box>
                <Box display="flex" gap={1}>
                  <Typography component="div" fontWeight="bold">
                    Rented To:
                  </Typography>
                  <Typography component="div">{`${rent.user.firstName} - ${rent.user.lastName}`}</Typography>
                </Box>
                <Box display="flex" gap={1}>
                  <Typography component="div" fontWeight="bold">
                    Rent Start Date:
                  </Typography>
                  <Typography component="div">
                    {dayjs(rent.startDate).format("DD/MM/YYYY")}
                  </Typography>
                </Box>
                <Box display="flex" gap={1}>
                  <Typography component="div" fontWeight="bold">
                    Rent End Date:
                  </Typography>
                  <Typography component="div">
                    {dayjs(rent.endDate).format("DD/MM/YYYY")}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
