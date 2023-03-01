import React, {FormEvent} from "react";

type Props = {
  onClick: () => void;
  label: string;
};

const ButtonComponent: React.FC<Props> = (props) => {
  const { onClick } = props;
  const { label } = props;
  const {onClick} = props;
  return (
    <button className="my-lib-ui-button" onClick={onClick}>{label}</button>
  );
};

export default ButtonComponent;
