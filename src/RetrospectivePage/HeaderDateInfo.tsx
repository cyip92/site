import React from "react";

const HeaderDateInfo = ({ name, info } : { name: string, info: string }) => {
  if (info === undefined) return null;
  return (
    <i>
      <b>{ name }:</b> { info }
    </i>
  );
};

export default HeaderDateInfo;