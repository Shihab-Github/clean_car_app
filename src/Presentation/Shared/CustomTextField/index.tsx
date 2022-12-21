import TextField from "@mui/material/TextField";

interface TextFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  register: any;
  errors: any;
  criterions?: object;
  fullWidth?: boolean;
  disabled?: boolean;
}

const CustomTextField = (props: TextFieldProps) => {
  const { name, placeholder, register, criterions, errors, ...rest } = props;

  return (
    <TextField
      placeholder={placeholder}
      error={name in errors}
      helperText={name in errors ? errors[name].message : ""}
      {...register(name, {
        ...criterions,
      })}
      fullWidth
      {...rest}
    />
  );
};

export default CustomTextField;
