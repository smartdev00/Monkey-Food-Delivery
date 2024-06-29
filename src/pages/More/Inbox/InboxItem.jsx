import { useState } from "react";
import Icons from "../../../components/Icons/Icons";

const InboxItem = (props) => {
  const [like, setLike] = useState(false);
  const { title, content, time } = props;
  return (
    <div className="flex items-start justify-between gap-[5px] pt-[14px] h-[88px] border-b-1px border-[#eeeeee]">
      <div className="border-[5px] border-[#ee5a30] rounded-[100%] mt-1" />
      <div className="flex flex-col basis-[90%] gap-1">
        <p className="text-sm text-primary">{title}</p>
        <p className="text-sm text-placeholder line-clamp-1">
          {content}
        </p>
      </div>
      <div
        className="flex flex-col w-[40px] items-end justify-between h-[80%]"
        onClick={() => setLike(!like)}
      >
        <p className="text-[9px] text-placeholder">{time}</p>
        <Icons type={like ? "star-filled" : "star-border"} />
      </div>
    </div>
  );
};

export default InboxItem;
