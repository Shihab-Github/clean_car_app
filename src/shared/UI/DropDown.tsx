import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface option {
  title: string;
  value: string;
}

interface DropDownProps {
  options: option[];
  title: string;
  value: string;
  handleChange?: () => void;
  register: any;
  criterions: object;
}

export default function DropDown({
  options,
  value,
  title,
  register,
  criterions,
}: DropDownProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>{title}</InputLabel>
      <Select
        {...register(value, {
          ...criterions,
        })}
        label={title}
        name={value}
      >
        {options.map((item: option) => (
          <MenuItem
            sx={{ textAlign: "center" }}
            key={item.value}
            value={item.value}
          >
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
