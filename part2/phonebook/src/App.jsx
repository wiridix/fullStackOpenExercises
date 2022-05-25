import React, { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Form } from "./components/Form";
import { Persons } from "./components/Persons";
import { Title } from "./components/Title";
import axios from "axios";

export const App = () => {
    const [persons, setPersons] = useState([]);

    const [newName, setNewName] = useState("");
    const [number, setNumber] = useState("");
    const [filter, setFilter] = useState("");

    const handleSub = (e) => {
        e.preventDefault();
        const personFind = persons.find(
            ({ name }) => name.toLowerCase() === newName.toLowerCase()
        );
        if (personFind) {
            alert(`${newName} is already added to phonebook`);
        } else {
            setPersons([...persons, { name: newName, number: number }]);
            setNewName("");
            setNumber("");
        }
    };

    const handleNewName = (e) => {
        setNewName(e.target.value);
    };

    const handleNumber = (e) => {
        setNumber(e.target.value);
    };

    const handleFind = (e) => {
        setFilter(e.target.value);
    };

    const rows = (persons) =>
        persons.filter(
            ({ name }) =>
                name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        );

    useEffect(() => {
        axios
            .get("http://localhost:3001/persons")
            .then((response) => setPersons(response.data));
    }, []);

    return (
        <div>
            <Title title="Phonebook" />
            <Filter handle={handleFind} />
            <Title title="Add a new" />
            <Form
                formHandle={handleSub}
                nameHanlde={handleNewName}
                nameValue={newName}
                numberHandle={handleNumber}
                numberValue={number}
            />
            <Title title="Numbers" />
            <Persons persons={rows(persons)} />
        </div>
    );
};
