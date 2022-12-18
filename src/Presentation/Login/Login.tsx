import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/signup");
  };

  return (
    <Box className="login-container">
      <Stack spacing={2}>
        <Typography variant="h5">Welcome !</Typography>
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Password" variant="outlined" fullWidth />
        <Button variant="contained">Login</Button>
        <Typography variant="subtitle1" gutterBottom component="div">
          Don't have an account ? Sign up <Link onClick={redirect}>Here</Link>
        </Typography>
      </Stack>
    </Box>
  );
}
