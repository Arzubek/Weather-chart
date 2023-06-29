import React from "react";

import { useGetCurrentWeather } from "@hooks/GetCurrentWeather";
import { useAppContextHook } from "@hooks/useAppContextHook";

function CurrentWeather() {
  const { selectCity } = useAppContextHook();
  
  return (
    <div>
      <div>
        <h1 className="text-white">lat: {selectCity?.value.latitude}</h1>
        <h1 className="text-white">lon: {selectCity?.value.longitude}</h1>
      </div>
      <div>
        <h1 className="text-white">
        </h1>
      </div>
    </div>
  );
}

export default CurrentWeather;
