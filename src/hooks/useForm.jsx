import { useState } from "react";

function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const resetForm = () => {
    setValues(initialValue);
  };
  if (!values.password) {
    values.password = "";
  }
  if (!values.password2) {
    values.password2 = "";
  }

  return [values, handleChange, resetForm];
}

export default useForm;
