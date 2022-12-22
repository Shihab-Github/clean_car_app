import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Car } from "../../Domain/Model/Car/Car";
import Box from "@mui/material/Box";

interface CarAccordionProps {
  id: string;
  expanded: string | boolean;
  handleChange: (panel: string) => any;
  car: Car;
}

export default function CarAccordion({
  id,
  expanded,
  handleChange,
  car,
}: CarAccordionProps) {
  return (
    <>
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
          <Box
            display="flex"
            sx={{ width: "100%" }}
            justifyContent="space-between"
          >
            <Typography component="div">{car.brand}</Typography>
            <Typography component="div">${car.dayPrice}/Day</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" gap={1}>
            <Box display="flex" gap={1}>
              <Typography component="div" fontWeight="bold">
                Brand:
              </Typography>
              <Typography component="div">{car.brand}</Typography>
            </Box>
            <Box display="flex" gap={1}>
              <Typography component="div" fontWeight="bold">
                Build:
              </Typography>
              <Typography component="div">{car.build}</Typography>
            </Box>
            <Box display="flex" gap={1}>
              <Typography component="div" fontWeight="bold">
                Year:
              </Typography>
              <Typography component="div">{car.year}</Typography>
            </Box>
            <Box display="flex" gap={1}>
              <Typography component="div" fontWeight="bold">
                Featured? :
              </Typography>
              <Typography component="div">{car.isFeatured}</Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <br />
    </>
  );
}
