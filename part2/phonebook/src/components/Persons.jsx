import React from "react";

export const Persons = ({ persons }) => {
    return (
        <ul>
            {persons.map((person, i) => (
                <li key={i}>
                    {person.name} {person.number}
                </li>
            ))}
        </ul>
    );
};
