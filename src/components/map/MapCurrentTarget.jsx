import CurrentTarget from "../../../public/assets/img/map/current-location-target.svg";

const MapCurrentTarget = (props) => {
  const { top, left } = props;
  return (
    <div className="absolute" style={{ top: top, left: left }}>
      <img src={CurrentTarget} />
    </div>
  );
};

export default MapCurrentTarget;
