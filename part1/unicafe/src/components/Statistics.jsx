import React from "react";
import { Statistic } from "./Statistic";

export const Statistics = ({ good, bad, neutral }) => {
    if (good === 0 || neutral == 0 || bad === 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        );
    }

    let total = good + bad + neutral;
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
            </table>
        </>
    );
};
