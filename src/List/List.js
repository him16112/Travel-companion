import React from "react";
import './List.css';
import PlaceDetail from "../PlaceDetail/PlaceDetail";

const List = ({ places }) => {
    return (
        <>
            <div className="main-list-component">
                <h2 className="written-food">Food & Dining around you</h2>
                <div className="list-upper">

                    <p>Type</p>

                    <select value="Restaurants">
                        <option value="Restaurants">Restaurants</option>
                        <option value="Hotels">Hotels</option>
                        <option value="Attractions">Attractions</option>
                    </select>

                    <select value="Above 3">
                        <option value="Above 3">All</option>
                        <option value="Above 4">Above 3</option>
                        <option value="All">Above 4</option>
                    </select>
                </div>

                {places?.map((place) => (
                    <PlaceDetail
                        place={place}
                    />
                ))}

            </div>
        </>
    );
}


export default List;