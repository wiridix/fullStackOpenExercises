import React from "react";

export const Person = ({ name, number, id ,handledelete}) => {
    return (
        <>
            <li>
                {name} {number}
            </li>
            <button data_id={id} onClick={handledelete}>Delete</button>
        </>
    );
};
