import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
//not using keys(not acceptable)<<<index as a key<<<<<<<<unique id(best practise)
const Body = () => {
  //using state react hook normal utility js fn
  //this listOfRestaurent is normal variable in js
  const [listOfRestaurent, setlistOfRestaurent] = useState([]);

  //using normal js variable not changing the ui
  //   let listOfRestaurent = [
  //     {
  //       info: {
  //         id: "151648",
  //         name: "Mr. Gurung Momo & Chinese Corner",
  //         cuisines: ["Momos", "Chinese", "Fast Food"],
  //         avgRating: 4.1,
  //         veg: true,
  //         parentId: "140255",
  //         avgRatingString: "4.1",
  //         totalRatingsString: "937",
  //         sla: {
  //           deliveryTime: 48,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "151649",
  //         name: "Street Fast Food",
  //         cuisines: ["Momos", "Chinese", "Fast Food"],
  //         avgRating: 3.9,
  //         veg: true,
  //         parentId: "140255",
  //         avgRatingString: "3,9",
  //         totalRatingsString: "937",
  //         sla: {
  //           deliveryTime: 48,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "151650",
  //         name: "Fastest Food",
  //         cuisines: ["Momos", "Chinese", "Fast Food"],
  //         avgRating: 4.5,
  //         veg: true,
  //         parentId: "140255",
  //         avgRatingString: "4.5",
  //         totalRatingsString: "937",
  //         sla: {
  //           deliveryTime: 46,
  //         },
  //       },
  //     },
  //   ];
  //useEffect

  useEffect(() => {
    // debugger;
    // console.log("useEffect is being executed");
    fetchData();
  }, []);
  // console.log("body called");
  const fetchData = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const currData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setlistOfRestaurent(currData);
  };
  //conditional rendering
  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("hello ");

            const filteredlistOfRestaurent = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurent(filteredlistOfRestaurent);
            // console.log(listOfRestaurent);
          }}
        >
          {" "}
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurent.map((restaurent) => (
          <Link
            key={restaurent?.info?.id}
            to={"/restaurents/" + restaurent.info.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
