import React from "react";

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>& { label: string };

const SelectComponent: React.FC<Props> = (props) => {
  const { label } = props;
  return (
    <div className="my-lib-ui-form-field">
      <label className="my-lib-ui-label-select">{label}</label>
      <select className="my-lib-ui-select" {...props}>
        {props.children}
      </select>
    </div>
  );
};

export default SelectComponent;
