import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const generateNumber = useSelector((state) => state.generateNumber);
  return (
    <>
      <div>Random number: {generateNumber.number}</div>
    </>
  );
}
