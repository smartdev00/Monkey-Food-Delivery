import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Icons from "../Icons/Icons";

const FooterItem = (props) => {
  const { type, name, toGo } = props;
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname.split("/")[1].toLocaleLowerCase());
  }, []);

  return (
    <Link to={toGo} className="flex flex-col items-center">
      <Icons
        type={type}
        color={path === toGo.split("/")[1] ? "orange" : "gray"}
      />
      <span
        className="text-xs text-placeholder"
        style={{ color: path === toGo.split("/")[1].toLocaleLowerCase() ? "#fc6011" : "" }}
      >
        {name}
      </span>
    </Link>
  );
};

export default FooterItem;
