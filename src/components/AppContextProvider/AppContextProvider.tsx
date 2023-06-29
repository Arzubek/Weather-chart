import { useState } from "react";
import { AppContext } from "@store/AppContext";

interface IProps {
  children: React.ReactNode;
}

function AppContextProvider({ children }: IProps) {
  const [selectCountry, setSelectCountry] = useState<ICountry>({} as ICountry);
  const [selectCity, setSelectCity] = useState<ICity | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  const values = {
    selectCountry,
    setSelectCountry,
    selectCity,
    setSelectCity,
    loading,
    setLoading,
    error,
    setError
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
