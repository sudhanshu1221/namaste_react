import resDataList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
//not using keys(not acceptable)<<<index as a key<<<<<<<<unique id(best practise)
const Body = () => {
  //using state react hook normal utility js fn
  //this listOfRestaurent is normal variable in js
  const [listOfRestaurent, setlistOfRestaurent] = useState(resDataList);

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
  return (
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
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
