import React, { useState } from "react";
import { updateNumber } from "../redux/generateNumber.actions";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function UpdateNumber() {
  const dispatch = useDispatch();
  const [pepe, setPepe] = useState("");

  const test = async () => {
    try {
      const result = await axios.get(
        "https://www.random.org/integers/?num=100&min=1&max=100&col=5&base=10&format=html&rnd=new"
      );
      setPepe(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={test}>asd{pepe}</button>;
}
