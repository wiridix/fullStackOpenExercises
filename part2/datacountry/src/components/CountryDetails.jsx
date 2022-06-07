import axios from "axios";
import React, { useEffect, useState } from "react";
const apikeyWeather = process.env.REACT_APP_APIWEATHER;

export const CountryDetails = ({
    country,
    capital,
    population,
    languages,
    img,
}) => {
    const [weather, setWeather] = useState({
        temperature: 0,
        wind: 0,
        img: "",
        windDir: "",
    });

    useEffect(() => {
        axios
            .get(
                `http://api.weatherstack.com/current?access_key=${apikeyWeather}&query=${country}`
            )
            .then(({ data }) =>
                setWeather({
                    temperature: data.current.temperature,
                    wind: data.current.wind_speed,
                    img: data.current.weather_icons[0],
                    windDir: data.current.wind_dir,
                })
            );
    }, []);
    return (
        <div>
            <h2>{country}</h2>
            <p>
                capital <b>{capital}</b>
            </p>
            <p>
                populaton <b>{population}</b>
            </p>
            <h3>Languages</h3>
            <ul>
                {Object.values(languages).map((language, i) => (
                    <li key={i}>{language}</li>
                ))}
            </ul>
            <img src={img} alt="flag" width="200" height="200" />
            <h3>Weather in {country}</h3>
            <p>temperature: {weather.temperature} Celcius</p>
            <img src={weather.img} alt="Weather Icon" />
            <p>
                wind: {weather.wind}mph direction {weather.windDir}
            </p>
        </div>
    );
};
