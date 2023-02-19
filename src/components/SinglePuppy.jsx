import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const BASE =
  "https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-FT/players";

const SinglePuppy = (props) => {
  const clickedPuppy = props.clickedPuppy;
  const [singlePuppy, setSinglePuppy] = useState({});
  console.log(clickedPuppy, "clicked!");

  let { id } = useParams();

  async function getClickedPuppy(puppyId) {
    try {
      console.log(puppyId);
      const response = await fetch(`${BASE}/${puppyId}`);
      const result = await response.json();
      const puppyInfo = result.data.player;
      setSinglePuppy(puppyInfo);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getClickedPuppy(id);
  }, []);

  return (
    <div className="puppy">
      {/* display info on the single puppy */}
      <Link to="/">Go Back</Link>
      <div className="singlePuppyIntro">
        <h1>{singlePuppy.name}</h1>
        <img
          src={`${singlePuppy.imageUrl}`}
          className="singlePuppyImg"
          alt={`${singlePuppy.name} the puppy.`}
        />
      </div>
      <div className="infoCard">
        <h2>Puppy Info</h2>
        <p>
          <span className="category">{`Breed: `}</span>
          {`${singlePuppy.breed}`}
        </p>
        {singlePuppy.name === "Lamont" || singlePuppy.name === "Lamont 2" ? (
          <p>
            <span className="category">{`Team name: `}</span>
            {`null`}
          </p>
        ) : (
          <p>
            <span className="category">{`Team name: `}</span>
            {`Ruff`}
          </p>
        )}
        <p>
          <span className="category">{`Puppy ID: `}</span>
          {`${singlePuppy.id}`}
        </p>
        <p>
          <span className="category">{`Team ID: `}</span>
          {`${singlePuppy.teamId}`}
        </p>
        <p>
          <span className="category">{`Cohort ID: `}</span>
          {`${singlePuppy.cohortId}`}
        </p>
        <p>
          <span className="category">{`Status: `}</span>
          {`${singlePuppy.status}`}
        </p>
      </div>
    </div>
  );
};

export default SinglePuppy;
