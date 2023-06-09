import React from "react";
import className from "classnames";
interface ILabelProps {
  name: string;
}

const index = ({ name }: ILabelProps) => {
  const classes = className("text-gray-400", "bg-transparent");

  return (
    <>
      <label className={classes}>{name}</label>
    </>
  );
};

export default index;
