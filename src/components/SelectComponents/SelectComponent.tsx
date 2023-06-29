import { Card } from "@tremor/react";
import Select from "react-select";
import { Country, City } from "country-state-city";
import { useAppContextHook } from "@hooks/useAppContextHook";

function SelectComponent() {
  const { setSelectCountry, selectCountry, selectCity, setSelectCity } =
    useAppContextHook();

  const getAllCountries = Country.getAllCountries();
  const getCitiesOfCountry = City.getCitiesOfCountry(
    selectCountry?.value?.isoCode
  );
  const allCountries = getAllCountries.map((country) => ({
    value: { ...country },
    label: country.name,
  }));

  const allCities = getCitiesOfCountry?.map((city) => ({
    value: { ...city },
    label: city.name,
  }));

  function handleSelectCountry(country: any) {
    setSelectCountry(country);
  }

  function handleSelectCity(city: any) {
    setSelectCity(city);
    console.log(city);
    
  }

  return (
    <div className="flex flex-col gap-[14px]">
      <div>
        <h1 className="text-[15px] uppercase mb-[5px]">
          Select country: &nbsp;
          {selectCountry?.label ? selectCountry?.label : "Qaraqlpag'istan"}
        </h1>
        <Card className="!py-[5px] !px-[5px]">
          <Select
            options={allCountries}
            placeholder="Select country"
            onChange={(data) => handleSelectCountry(data)}
          />
        </Card>
      </div>
      {selectCountry.label && (
        <div>
          <h1 className="text-[15px] uppercase mb-[5px]">
            Select city: &nbsp;
            {selectCity?.label ? selectCity.label : "Nukus"
            }
          </h1>
          <Card className="!py-[5px] !px-[5px]">
            <Select
              options={allCities}
              placeholder="Select city"
              onChange={(data) => handleSelectCity(data)}
            />
          </Card>
        </div>
      )}
    </div>
  );
}

export default SelectComponent;
