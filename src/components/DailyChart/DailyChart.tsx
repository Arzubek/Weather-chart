import { AreaChart, Card, Title } from "@tremor/react";
import { useAppContextHook } from "@hooks/useAppContextHook";
import React from "react";

interface IData {
  data: ICurrentWeather;
}

function DailyChart({data} :IData) {
  const { time, temperature_2m_max, temperature_2m_min } = data.daily;
  const {selectCity} = useAppContextHook()

  const days = time.map((day) => new Date(day).toLocaleString("ru", { day: "numeric", month: "numeric" }))
  console.log(days);
  

  const tempData = days.map((day, i) => ({
    day,
    max: temperature_2m_max[i],
    min: temperature_2m_min[i],
  }));
  console.log(tempData);
  console.log(temperature_2m_max);
  
  

  const dataFormatter = (number: number) => {
    return "°C " + Intl.NumberFormat("us").format(number).toString();
  };
  return (
    <Card>
      <Title>Daily temperature of {selectCity?.label}</Title>
      <AreaChart
        className="h-72 mt-4"
        data={tempData}
        index="day"
        categories={["max", "min"]}
        colors={["blue", "emerald"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}

export default DailyChart;
