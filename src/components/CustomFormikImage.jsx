import React from "react";
import InputFile from "./product/manage/InputFile";
import Thumb from "./product/manage/Thumb";

const useStyles = makeStyles((theme) => ({
  inputLabel: {
    color: theme.palette.common.black,
    padding: theme.spacing(1, 0),
  },
  error: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontSize: "0.75rem",
    color: "#f44336",
    marginLeft: "14px",
    marginRight: "14px",
    marginTop: "4px",
    marginBottom: "0px",
  },
  border: {
    backgroundColor: "red",
  },
}));

const CustomFormikImage = ({
  field,
  id,
  name,
  label,
  required,
  value,
  valueUrl,
  supportedFormats,
  width,
  height,
  size,
  setFieldValue,
  setImageChanged,
  form: { touched, errors },
  ...props
}) => {
  const localClasses = useStyles();

  return (
    <React.Fragment>
      <InputFile
        {...field}
        {...props}
        id={id}
        name={name}
        accept={supportedFormats.join(",")}
        onChange={(file) => {
          setFieldValue(field.name, file);
          setImageChanged(true);
        }}
      >
        <Thumb
          name={field.name}
          url={value || valueUrl}
          file={value}
          width={width}
          height={height}
          touched={touched}
          errors={errors}
        />
      </InputFile>
      {touched[field.name] && errors[field.name] && (
        <p className={localClasses.error}>{errors[field.name]}</p>
      )}
    </React.Fragment>
  );
};

export default CustomFormikImage;
