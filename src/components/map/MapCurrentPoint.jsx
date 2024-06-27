import CurrentPoint from "../../../public/assets/img/map/map-current-point.svg";

const MapCurrentPoint = (props) => {
  const { top, left } = props;
  return (
    <div className="absolute" style={{ top: top, left: left }}>
      <img src={CurrentPoint} />
    </div>
  );
};

export default MapCurrentPoint;
