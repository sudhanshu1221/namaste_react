import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_ITEMS } from "../utils/constants";
const RestaurentMenu = () => {
  const [resData, setResData] = useState(null);
  //this is done to extract the param from url defined at app.js
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_ITEMS + id);
    const jsonData = await data.json();
    // console.log(jsonData);
    // console.log(jsonData?.data.cards[2].card.card.info);
    // console.log(
    //   jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
    //     ?.card?.card?.itemCards
    // );
    setResData(jsonData);
  };
  //   console.log("sssssss");
  //   console.log(resData?.data?.cards[2].card.card.info);
  if (resData === null) return <Shimmer />;

  //   console.log(id);
  const { name, cuisines, costForTwoMessage } =
    resData?.data?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;
  //   console.log(name, cuisines, costForTwoMessage);
  return (
    <div id="menu">
      <h1> {name}</h1>
      <ul>
        <li> {cuisines.join()}</li>
      </ul>
      <h1> Cost for two:{costForTwoMessage}</h1>
      <h2> Menu</h2>
      <ul>
        {" "}
        {itemCards.map((item) => (
          <li key={item.card.info.name}>
            {item.card.info.name}-
            {Math.floor(item.card.info.price / 100) ||
              Math.floor(item.card.info.defaultPrice / 100)}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurentMenu;
