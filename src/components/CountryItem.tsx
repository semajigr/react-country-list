import { Color, ICountry } from "../types";
import { Badge } from "./Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="list-group-item d-flex ">
      <img src={country.flag} alt="flag" className="col-1" />
      <p className="col-3 px-2">{country.name}</p>
      <p className="col-2">{country.capital}</p>
      <p className="col-2">{country.region}</p>
      <p className="col-2 ">
        <Badge value={country.area} type="area" color={Color.Primary} />
      </p>
      <p className="col-2 ">
        <Badge
          value={country.population}
          type="population"
          color={Color.Secondary}
        />
      </p>
    </li>
  );
};
