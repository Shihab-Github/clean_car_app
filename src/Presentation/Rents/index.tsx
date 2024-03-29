import useFetchRents from "./hooks/useFetchRents";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import RentHistory from "./RentHistory";

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
      <Grid container spacing={1}>
        {rents.map((rent) => (
          <RentHistory rent={rent} />
        ))}
      </Grid>
    </>
  );
}
