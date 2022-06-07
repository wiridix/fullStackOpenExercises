import React, { useEffect, useState } from "react";
import { Countrys } from "./components/Countrys";
import axios from "axios";

export const App = () => {
    const [countrys, setCountrys] = useState([]);
    const [find, setFind] = useState("");

    const handleFindCountries = (e) => {
        setFind(e.target.value);
    };

    const filterCountrys = (countrys) => {
        return countrys.filter(
            ({ name }) =>
                name.common.toLowerCase().indexOf(find.toLowerCase()) !== -1
        );
    };

    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/all`)
            .then((res) => setCountrys(res.data));
    }, []);

    return (
        <>
            find countries <input type="text" onChange={handleFindCountries} />
            {find.length === 0 
            ? 
            ""
            : <Countrys data={filterCountrys(countrys)} />}
        </>
    );
};
