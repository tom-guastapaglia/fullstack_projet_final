import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const RadioComponent: React.FC<Props> = (props) => {
  const { label } = props;
  return (
    <div className="my-lib-ui-form-field-radio">
      <label className="my-lib-ui-label">{label}</label>
      <input {...props} className="my-lib-ui-radio"/>
    </div>
  );
};

export default RadioComponent;