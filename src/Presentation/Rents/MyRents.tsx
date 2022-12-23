import React from "react";
import useMyRentHistory from "./hooks/useMyRentHistory";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid'
import RentHistory from "./RentHistory";

export default function MyRents() {
  const [myRents] = useMyRentHistory();

  if (myRents.length === 0) {
    return (
      <>
        <Typography mb={2} variant="h4">
          Rent History
        </Typography>
        <Typography mb={2} variant="body1">
          You have not rented any car yet
        </Typography>
      </>
    );
  }

  return (
    <>
      <Typography mb={2} variant="h4">
        My Rent History
      </Typography>
      <Grid container spacing={1}>
        {myRents.map((rent) => (
          <RentHistory rent={rent} />
        ))}
      </Grid>
    </>
  );
}
