import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/Button";
import { Statistics } from "./components/Statistics";
import { Title } from "./components/Title";

const App = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);

    const goodClick = () => {
        setGood(good + 1);
    };
    const badClick = () => {
        setBad(bad + 1);
    };
    const neutralClick = () => {
        setNeutral(neutral + 1);
    };

    return (
        <>
            <Title title="Give FeedBack" />
            <Button handleClick={goodClick} text="Good" />
            <Button handleClick={neutralClick} text="Neutral" />
            <Button handleClick={badClick} text="Bad" />
            <Title title="Statistics" />
            <Statistics good={good} bad={bad} neutral={neutral} />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
