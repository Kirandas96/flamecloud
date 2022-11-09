import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Autocomplete, Button, Checkbox, Stack, TextField } from "@mui/material";

export default function SopAccess() {
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
    const names=["A","S","D","F","G"]
  return (
    <div>
      <div>
      <h2>SALES</h2>
      <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={names}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: 400 }}
      renderInput={(params) => (
        <TextField {...params} label="SELECT MEMBERS" placeholder="Team Members" />
      )}
    />
      <h2>MARKETING</h2>
      <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={names}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: 400 }}
      renderInput={(params) => (
        <TextField {...params} label="SELECT MEMBERS" placeholder="Team Members" />
      )}
    />
      <h2>DESIGN</h2>
      <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={names}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: 400 }}
      renderInput={(params) => (
        <TextField {...params} label="SELECT MEMBERS" placeholder="Team Members" />
      )}
    />
      </div>
      <Stack direction="row" spacing={2}>
      <Button>Cancel</Button>
      <Button>Update</Button>
      </Stack>
    </div>
  );
}
