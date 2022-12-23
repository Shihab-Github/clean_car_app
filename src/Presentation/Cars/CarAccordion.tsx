import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Snackbars from "../../shared/UI/Snackbar";
import { AlertColor } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { Car } from "../../Domain/Model/Car/Car";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import observableUserStore from "../../store/ObservableUserStore";
import useRent from "./hooks/useRent";
import useToast from "../../shared/hooks/useToast";
import { Response } from "../../interfaces";

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
  const [
    { snackbarOpen, setSnackbarOpen, snackbarMessage, snackbarSeverity },
    setToast,
  ] = useToast();
  const {
    startDate,
    endDate,
    price,
    handleStartDate,
    handleEndDate,
    showRentForm,
    toggleRentForm,
    rentCar,
  } = useRent(car);

  const submit = () => {
    let res: Response = rentCar();
    if (res.statusCode === 201) {
      setToast(res.successMessage ?? "", "success");
      toggleRentForm()
    }
  };

  return (
    <>
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
          <Box display="flex" gap={2} sx={{ width: "100%" }}>
            {car.isRented ? (
              <>
                <Typography component="div">{car.brand}</Typography>
                <Box flexGrow={1}>
                  <Chip label="Rented" color="success" />
                </Box>
                <Typography component="div">${car.dayPrice}/Day</Typography>
              </>
            ) : (
              <>
                <Typography flexGrow={1} component="div">
                  {car.brand}
                </Typography>
                <Typography component="div">${car.dayPrice}/Day</Typography>
              </>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" gap={1} mb={2}>
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
          {!car.isRented && observableUserStore.loggedInUser?.type === "customer" ? (
            <>
              {!showRentForm ? (
                <Button variant="contained" onClick={toggleRentForm}>
                  Rent This Car
                </Button>
              ) : null}
            </>
          ) : null}

          {showRentForm ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid mt={2} container spacing={2}>
                <Grid item xs={4}>
                  <DesktopDatePicker
                    label="Rent Start Date"
                    inputFormat="MM/DD/YYYY"
                    value={startDate}
                    onChange={handleStartDate}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <DesktopDatePicker
                    label="Rent End Date"
                    inputFormat="MM/DD/YYYY"
                    value={endDate}
                    onChange={handleEndDate}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Price"
                    value={price}
                    disabled
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Box mt={2} gap={1} display="flex" flexDirection="row-reverse">
                <Box>
                  <Button variant="contained" onClick={submit}>
                    Save
                  </Button>
                </Box>
                <Box>
                  <Button onClick={toggleRentForm}>Cancel</Button>
                </Box>
              </Box>
            </LocalizationProvider>
          ) : null}
        </AccordionDetails>
      </Accordion>
      <br />
      <Snackbars
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity as AlertColor}
      />
    </>
  );
}
