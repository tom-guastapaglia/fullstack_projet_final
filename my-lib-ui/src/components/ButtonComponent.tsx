import React from "react";

type Props = { label: string };

const ButtonComponent: React.FC<Props> = (props) => {
  const { label } = props;
  return (
    <button className="my-lib-ui-button">{label}</button>
  );
};

export default ButtonComponent;
