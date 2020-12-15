import React from "react";

const CountryOptions = ({ countries, handleCountrySelect }) => {
    return (
        <ul className='options__list'>
            {countries.map((country) => (
                <li className='options__item'>
                    <button
                        onClick={() => handleCountrySelect(country)}
                        className='btn'>
                        {country}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default CountryOptions;
