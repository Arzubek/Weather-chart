interface IContext {
  selectCountry: ICountry;
  setSelectCountry: React.Dispatch<React.SetStateAction<ICountry>>;
  selectCity: ICity | null;
  setSelectCity: React.Dispatch<React.SetStateAction<ICity | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: any;
  setError: React.Dispatch<any>;
}

// Country

interface ITimeZone {
  abbreviation: string;
  gmtOffset: number;
  gmtOffsetName: string;
  tzName: string;
  zoneName: string;
}

interface ICountryValue {
  currency: string;
  flag: string;
  isoCode: string;
  latitude: strin;
  longitude: string;
  name: string;
  phonecode: string;
  timezones: ITimeZone[];
}

interface ICountry {
  label: string;
  value: ICountryValue;
}

// City

interface ICityValue {
  countryCode: string;
  latitude: string;
  longitude: string;
  name: string;
  stateCode: string;
}

interface ICity {
  value: ICityValue;
  label: string;
}

// Weather

interface HourlyUnits {
  time: string
  temperature_2m: string
  relativehumidity_2m: string
  dewpoint_2m: string
  apparent_temperature: string
  precipitation_probability: string
  precipitation: string
}

interface Hourly {
  time: string[]
  temperature_2m: number[]
  relativehumidity_2m: number[]
  dewpoint_2m: number[]
  apparent_temperature: number[]
  precipitation_probability: number[]
  precipitation: number[]
}

interface DailyUnits {
  time: string
  weathercode: string
  temperature_2m_max: string
  temperature_2m_min: string
  apparent_temperature_max: string
  apparent_temperature_min: string
}

interface Daily {
  time: string[]
  weathercode: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  apparent_temperature_max: number[]
  apparent_temperature_min: number[]
}

interface ICurrentWeather {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: HourlyUnits
  hourly: Hourly
  daily_units: DailyUnits
  daily: Daily
}