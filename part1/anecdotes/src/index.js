import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = ({ handle, text }) => <button onClick={handle}>{text}</button>;
const Title = ({ title }) => <h2>{title}</h2>;
const Anecdote = ({ anecdote }) => <p>{anecdote}</p>;
const Votes = ({ votes }) => <p>has vote: {votes}</p>;

const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0);
    const [votes, setvotes] = useState(new Array(anecdotes.length).fill(0));

    const handleNext = () => {
        let num = Math.floor(Math.random() * (0, anecdotes.length));
        setSelected(num);
    };

    const handleVote = () => {
        const copy = [...votes];
        copy[selected] = copy[selected] + 1;
        setvotes(copy);
    };

    let anecdoteMaxVotes = votes.indexOf(Math.max(...votes));

    return (
        <>
            <Title title="Anecdote of the day" />
            <Anecdote anecdote={anecdotes[selected]} />
            <Button handle={handleVote} text="Vote" />
            <Button handle={handleNext} text="Next Anecdote" />
            <Votes votes={votes[selected]} />
            <Title title="Anecdote with most votes" />
            <Anecdote anecdote={anecdotes[anecdoteMaxVotes]} />
            <Votes votes={votes[anecdoteMaxVotes]} />
        </>
    );
};

const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App anecdotes={anecdotes} />
    </React.StrictMode>
);
