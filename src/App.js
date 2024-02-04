import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Map from "./Map/Map";
import List from "./List/List";
import { getPlacesData } from "./API/trvelAdvisorAPI";
import PlaceDetail from "./PlaceDetail/PlaceDetail";
import './App.css';



const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  // useEffect(()=>{
  //   navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
  //     setCoordinates({lat: latitude, lng: longitude});
  //   })
  // },[])

  // useEffect(() => {
  //   getPlacesData(bounds.sw, bounds.ne)
  //     .then((data) => {
  //       setPlaces(data);
  //       console.log(data);
  //     });
  // }, [coordinates, bounds])

  return (
    <>
      <Header />
      <div className="wrapper">

        <div className="main-list-component">
        < PlaceDetail/>
        </div>

        <div className="main-map-component">
          
        </div>


        {/* <List
          places={places} 
        />
        <Map
          coordinates={coordinates}
          setBounds={setBounds}
          setCoordinates={setCoordinates}
        /> */}
      </div>

  
    </>
  );
}

export default App;