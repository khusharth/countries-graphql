import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../Graphql/queries";
import CountryCard from "../Components/CountryCard";

const CountryContainer = ({ country }) => {
    const { data, loading, error } = useQuery(GET_COUNTRY, {
        variables: { countryName: country },
    });
    console.log(data);

    if (loading) return <div className='loading'>Loading...</div>;
    else if (error) return <div className='error'>Error: {error.message} </div>;
    else
        return (
            <div className='country__container'>
                {data && <CountryCard countryData={data.Country[0]} />}
            </div>
        );
};

export default CountryContainer;
