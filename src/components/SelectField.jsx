import React, { useState } from "react";

const SelectField = React.forwardRef(function SelectField(
  { label, placeholder, valueArray, ...props },
  ref
) {

  return (
    <select className="bg-slate-950 py-3 px-2 border-[1px] rounded" required {...props} ref={ref}>
      <option value="">Select Your Designation</option>
      {valueArray.map((value)=>(<option value={value}>{value}</option>))}
    </select>
  );
});

export default SelectField;
