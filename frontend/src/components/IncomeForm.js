import React from "react";
import { TextField } from "@mui/material";

const IncomeForm = ({ label, value, setValue }) => (
    <TextField fullWidth margin="normal" label={label} value={value} onChange={(e) => setValue(e.target.value)} />
);

export default IncomeForm;
