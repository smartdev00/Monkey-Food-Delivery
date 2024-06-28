const AboutItem = (props) => {
  const { content } = props;
  return (
    <div className="flex items-start gap-2">
      <div className="border-[3px] mt-[6px] border-[#ee5a30] rounded-[100%]" />
      <div className="flex flex-col">
        <p className="text-sm text-primary">{content}</p>
      </div>
    </div>
  );
};

export default AboutItem;
