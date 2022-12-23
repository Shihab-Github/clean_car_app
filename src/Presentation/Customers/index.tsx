import { useState } from "react";
import Typography from "@mui/material/Typography";
import CustomerAccordion from "./CustomerAccordion";
import useCustomers from "./hooks/useCustomers";

export default function Customers() {
  const [customers] = useCustomers();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  if (customers.length === 0) {
    return (
      <>
        <Typography mb={2} variant="h4">
          Customers
        </Typography>
        <Typography mb={2} variant="body1">
          No Customers Available
        </Typography>
      </>
    );
  }

  return (
    <>
      <Typography mb={2} variant="h4">
        Customers
      </Typography>

      {customers.map((customer) => (
        <CustomerAccordion
          key={customer.id}
          id={customer.id}
          expanded={expanded}
          customer={customer}
          handleChange={handleChange}
        />
      ))}
    </>
  );
}
