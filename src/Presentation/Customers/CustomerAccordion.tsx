import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import observableUserStore from "../../store/ObservableUserStore";
import { User } from "../../Domain/Model/User/User";

interface CustomerAccordionProps {
  id: string;
  expanded: string | boolean;
  handleChange: (panel: string) => any;
  customer: User;
}

export default function CustomerAccordion({
  id,
  expanded,
  handleChange,
  customer,
}: CustomerAccordionProps) {
  return (
    <>
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
          <Box display="flex" alignItems="center">
            <Typography variant="h4" fontWeight="bold" component="div">
              Name:
            </Typography>
            <Typography variant="h4" component="div">
              {`${customer.firstName} ${customer.lastName}`}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" gap={1} mb={2}>
            <Box display="flex" gap={1}>
              <Typography component="div" fontWeight="bold">
                Customer ID:
              </Typography>
              <Typography component="div">{customer.id}</Typography>
            </Box>
            <Box display="flex" gap={1}>
              <Typography component="div" fontWeight="bold">
                Phone:
              </Typography>
              <Typography component="div">{customer.phoneNumber}</Typography>
            </Box>
            <Box display="flex" gap={1}>
              <Typography component="div" fontWeight="bold">
                Email:
              </Typography>
              <Typography component="div">
                {customer.email ? customer.email : "N/A"}
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <br />
    </>
  );
}
