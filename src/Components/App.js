import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../Graphql/client";
import CountryContainer from "./CountryContainer";
import CountryOptions from "./CountryOptions";
import "../Styles/style.css";

const countries = [
    "Australia",
    "Bangladesh",
    "Belgium",
    "Canada",
    "China",
    "Iraq",
    "India",
    "Malaysia",
];

const App = () => {
    const [country, setCountry] = useState(countries[0]);

    return (
        <ApolloProvider client={client}>
            <main className='main__container'>
                <h1 className='heading'>Country Stats</h1>
                <CountryOptions
                    countries={countries}
                    handleCountrySelect={setCountry}
                />
                <CountryContainer country={country} />
            </main>
        </ApolloProvider>
    );
};

export default App;
