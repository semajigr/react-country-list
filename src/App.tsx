import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers";

export const App = () => {
  return (
    <div className="container">
      <h1 className="my-3">Country List</h1>
      <CountryList countries={transformCountries(countries)} />
    </div>
  );
};
