import React from "react";
import { CountryDetails } from "./CountryDetails";

export const Countrys = ({ data }) => {
    if (data.length === 1)
        return data.map((item) => (
            <CountryDetails
                key={item.area}
                country={item.name.common}
                capital={item.capital[0]}
                population={item.population}
                languages={item.languages}
                img={item.coatOfArms.png}
            />
        ));

    return (
        <>
            {data.length <= 10 ? (
                data.map((item) => <p key={item.area}>{item.name.common}</p>)
            ) : (
                <p>Too many matches, specify another filter</p>
            )}
        </>
    );
};
