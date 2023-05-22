import React, { useState } from "react";
import { FadeLoader } from "react-spinners";

const Items = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {data.length < 5 ? (
        <FadeLoader color="#36d7b7" />
      ) : (
        data.map((item) => {
          return (
            <div>
              <p>{item?.title} </p>
              <p>{item?.description}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Items;
