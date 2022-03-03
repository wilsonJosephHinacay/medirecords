import React from "react";
import _ from "lodash";

const Input = ({ htmlFor, label, ...props }, ref) => {
  return (
    <>
      {!_.isEmpty(label) && (
        <div className="gravityFormLabel">
          <label htmlFor={htmlFor}>{label}</label>
        </div>
      )}
      <input
        className={`border-2 font-light w-full border-gray-five text-gray-three box-border gravityFormControl`}
        {...props}
        ref={ref}
      />
    </>
  );
};

const InputField = React.forwardRef(Input);

export default InputField;
