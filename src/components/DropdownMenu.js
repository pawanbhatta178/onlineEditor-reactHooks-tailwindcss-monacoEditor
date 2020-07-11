import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import React from "react";

function DropdownMenu({ langType, handleChange }) {
  return (
    <Select
      value={langType}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value="node">
        <em>JavaScript</em>
      </MenuItem>
      <MenuItem value={"python"}>Python</MenuItem>
      <MenuItem value={"java"}>Java</MenuItem>
      <MenuItem value={"cpp"}>C++</MenuItem>
      <MenuItem value={"c"}>C</MenuItem>
    </Select>
  );
}

export default DropdownMenu;
