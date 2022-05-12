import React from "react";
import { Statistic } from "./Statistic";

export const Statistics = ({ good, bad, neutral }) => {
    let total = good + bad + neutral;
    if (total === 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        );
    }

    let promedi = (good - bad) / total;
    let positive = (good / total) * 100 + " %"
    return (
        <>
            <table>
                <tr>
                    <td>
                        <Statistic text="Good" value={good} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Statistic text="Neutral" value={neutral} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Statistic text="Bad" value={bad} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Statistic text="All" value={total} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Statistic text="Average" value={promedi} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Statistic text="Positive" value={positive} />
                    </td>
                </tr>
            </table>
        </>
    );
};
