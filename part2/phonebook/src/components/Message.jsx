import React from "react";
import "./message.css"

export const Message = ({ stylename, message }) => {
    if (message) {
        return <div className={stylename}>{message}</div>;
    }

    return null;
};
