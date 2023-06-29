import { useContext } from "react";
import { AppContext } from "@store/AppContext";

export function useAppContextHook() {
  return useContext(AppContext);
}
