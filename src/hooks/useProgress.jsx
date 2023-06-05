import { useContext } from "react";
import ProgressContext from "../contexts/progressContext";


export default function useProgress() {
  return useContext(ProgressContext);
}