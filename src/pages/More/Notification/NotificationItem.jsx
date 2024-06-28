const NotificationItem = (props) => {
  const { content, time } = props;
  return (
    <div className="flex flex-col justify-between px-[22px] pt-[14px] h-[64px] hover:bg-[#f6f6f6]">
      <div className="flex items-start gap-8">
        <div className="border-[5px] border-[#ee5a30] rounded-[100%]" />
        <div className="flex flex-col">
          <p className="text-sm text-primary h-[20px] overflow-hidden">
            {content}
          </p>
          <span className="text-xs text-placeholder">{time}</span>
        </div>
      </div>
      <div className="border-b-1px w-[100%] border-[#eeeeee]" />
    </div>
  );
};

export default NotificationItem;
