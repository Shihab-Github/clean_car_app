import { useState } from "react";
import Typography from "@mui/material/Typography";
import CarAccordion from "./CarAccordion";
import useCar from "./hooks/useCar";

export default function Cars() {
  const [cars] = useCar();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  if (cars.length === 0) {
    return (
      <>
        <Typography mb={2} variant="h4">
          Cars
        </Typography>
        <Typography mb={2} variant="body1">
          No Cars Available
        </Typography>
      </>
    );
  }

  return (
    <>
      <Typography mb={2} variant="h4">
        Cars
      </Typography>

      {cars.map((car) => (
        <CarAccordion
          key={car.id}
          id={car.id}
          expanded={expanded}
          car={car}
          handleChange={handleChange}
        />
      ))}
    </>
  );
}
