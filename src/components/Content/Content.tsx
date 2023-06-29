import { useGetCurrentWeather } from "@hooks/GetCurrentWeather";
import { useAppContextHook } from "@hooks/useAppContextHook";
import React from "react";
import { CurrentWeather, DailyChart, HourlyChart } from "..";

function Content() {
  const { selectCity } = useAppContextHook();

  let lat = selectCity?.value.latitude ? selectCity.value.latitude : 20;
  let lon = selectCity?.value.longitude ? selectCity.value.longitude : 20;
  const data = useGetCurrentWeather<ICurrentWeather>(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&timezone=auto`
  );
  console.log(data);
  return (
    <div className="bg-gray-900 min-h-screen ml-[320px] p-[20px]">
      <h1 className="text-white">Content-block</h1>
      {data?.latitude && <CurrentWeather/>}
      {data?.latitude && <HourlyChart data={data}/>}
      {data?.latitude && <DailyChart data={data}/>}
      
    </div>
  );
}

export default Content;
