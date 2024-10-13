import { CDN_LINK } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;
  return (
    //giving inline css
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-card-logo" src={CDN_LINK} />
      <h3> {name}</h3>
      <h5> {cuisines}</h5>
      <h5> {avgRating}</h5>
      <h5> {resData.info.sla.deliveryTime + " minutes"}</h5>
    </div>
  );
};
export default RestaurentCard;
