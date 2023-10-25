import PropTypes from "prop-types";

import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city" />;

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((e) => e.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }];
    } else return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        //TODO: will later generate a key
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CountryList;
