import React from "react";

const CountryCard = ({ countryData }) => {
    const languages = countryData.officialLanguages;
    const currencies = countryData.currencies;
    const indianNumberFormatter = new Intl.NumberFormat("en-IN");
    const population = indianNumberFormatter.format(countryData.population);
    const area = indianNumberFormatter.format(countryData.area);

    return (
        <article className='country__card'>
            <figure className='country__figure'>
                <img src={countryData.flag.svgFile} alt={countryData.name} />
                <figcaption>
                    <h2>{countryData.name}</h2>
                </figcaption>
            </figure>
            <div className='country__content'>
                <p>
                    <strong>Capital:</strong> {countryData.capital}
                </p>
                <p>
                    <strong>Demonym:</strong> {countryData.demonym}
                </p>
                <p>
                    <strong>Offical Languages: </strong>
                    {languages &&
                        languages.map((lang) => (
                            <span key={lang.name} className='country__language'>
                                {lang.nativeName} ({lang.name})
                            </span>
                        ))}
                </p>
                <p>
                    <strong>Currencies: </strong>
                    {languages &&
                        currencies.map((curr) => (
                            <span key={curr.name} className='country__currency'>
                                {curr.symbol} {curr.name}
                            </span>
                        ))}
                </p>
                <p>
                    <strong>Population: </strong> {population} humans
                </p>
                <p>
                    <strong>Area: </strong>
                    {area} km<sup>2</sup>
                </p>
            </div>
        </article>
    );
};

export default CountryCard;
