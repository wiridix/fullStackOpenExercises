import React from "react";
import { Part } from "./Part";

export const Content = ({ parts }) => {
    return (
        <>
            {parts.map((item) => {
                return <Part name={item.name} exercises={item.exercises} key={item.name} />;
            })}
        </>
    );
};
