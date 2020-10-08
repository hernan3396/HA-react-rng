import { GENERATE_NUMBER } from "./generateNumber.types";
import axios from "axios";

const initialState = {
  id: 0,
  number: 0,
  loading: false,
};

export default function randomNumberReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NUMBER:
      return [
        ...state,
        axios.get(
          "https://www.random.org/integers/?num=100&min=1&max=100&col=5&base=10&format=html&rnd=new"
        ),
      ];
    default:
      return state;
  }
}
