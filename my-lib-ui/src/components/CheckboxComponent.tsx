import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const CheckboxComponent: React.FC<Props> = (props) => {
  const { label } = props;
  return(
    <div className="my-lib-ui-form-field-checkbox">
      <label className="my-lib-ui-label">{label}</label>
      <input {...props} className="my-lib-ui-checkbox"/>
    </div>
  );
};

export default CheckboxComponent;
