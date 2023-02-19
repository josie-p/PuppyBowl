import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { Outlet, useOutletContext } from "react-router-dom";
const BASE =
  "https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-FT/players";

const Main = () => {
  const [puppies, setPuppies] = useState([]);

  //call API
  async function getPuppies() {
    try {
      const response = await fetch(`${BASE}`);
      const result = await response.json();
      const puppiesData = result.data.players;
      setPuppies(puppiesData);
    } catch (error) {
      console.log(error);
    }
  }

  //set API info
  useEffect(() => {
    getPuppies();
  }, []);

  return (
    <div id="main">
      <Navbar />
      <Outlet context={puppies} />
    </div>
  );
};

export default Main;
