import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./loadingSpinner.css";

export const LoadingSpinner = () => (
  <div className="spinnerContainer">
    <BeatLoader size={20} margin={4} />
  </div>
);
