import React from "react";
import { Person } from "./Person";

export const Persons = ({ persons, handledelete }) => {
    return (
        <ul>
            {persons.map(({name,number,id}) => (
                <Person name={name} number={number} id={id} key={id} handledelete={handledelete} />
            ))}
        </ul>
    );
};
