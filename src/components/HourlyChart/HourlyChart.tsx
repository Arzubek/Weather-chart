import React from "react";
import { AreaChart, Card, Title } from "@tremor/react";
import { useAppContextHook } from "@hooks/useAppContextHook";

interface IData {
  data: ICurrentWeather;
}

function HourlyChart({ data }: IData) {
  const { time, temperature_2m, apparent_temperature } = data.hourly;
  const {selectCity} = useAppContextHook()

  const hours = time.map((hour) =>
    new Date(hour).toLocaleString("ru", { hour: "numeric" })
  ).slice(0,24);

  const tempData = hours.map((hour, i) => ({
    hour,
    temp: temperature_2m[i],
    apparent_temperature: apparent_temperature[i]
  }))
  console.log(tempData);
  

  const dataFormatter = (number: number) => {
    return "°C " + Intl.NumberFormat("us").format(number).toString();
  };
  return (
    <Card>
      <Title>Hourly temperature of {selectCity?.value.name ? selectCity.label : "Select city"}</Title>
      <AreaChart
        className="h-72 mt-4"
        data={tempData}
        index="hour"
        categories={["temp", "apparent_temperature"]}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}

export default HourlyChart;
