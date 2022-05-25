import React from "react";

export const Form = ({formHandle,nameHanlde,nameValue,numberHandle,numberValue}) => {
    return (
        <form onSubmit={formHandle}>
            <div>
                name: <input onChange={nameHanlde} value={nameValue} />
            </div>
            <div>
                number: <input onChange={numberHandle} value={numberValue} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};
