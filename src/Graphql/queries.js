import gql from "graphql-tag";

export const GET_COUNTRY = gql`
    query CountryData($countryName: String!) {
        Country(name: $countryName) {
            name
            nativeName
            population
            area
            demonym
            capital
            officialLanguages {
                name
                nativeName
            }
            currencies {
                name
                symbol
            }
            flag {
                emoji
                svgFile
            }
        }
    }
`;
