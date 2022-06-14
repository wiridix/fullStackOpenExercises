import React, { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Form } from "./components/Form";
import { Message } from "./components/Message";
import { Persons } from "./components/Persons";
import { Title } from "./components/Title";
import personservices from "./services/personsServices";

export const App = () => {
    const [persons, setPersons] = useState([]);

    const [newName, setNewName] = useState("");
    const [number, setNumber] = useState("");
    const [filter, setFilter] = useState("");
    const [styleName, setStyleName] = useState("");
    const [message, setmessage] = useState(null);

    const handleSub = (e) => {
        e.preventDefault();
        const personFind = persons.find(
            ({ name }) => name.toLowerCase() === newName.toLowerCase()
        );

        const personNew = {
            name: newName,
            number: number,
        };

        if (personFind) {
            if (
                window.confirm(
                    `${newName} is already added to phonebook, replace the old number with a new one?`
                )
            ) {
                personservices
                    .updatePerson(personFind.id, personNew)
                    .then(
                        personservices.getAll().then((res) => setPersons(res)),
                        setmessage(`Update ${newName}`),
                        setStyleName("createUpdate"),
                        setTimeout(() => {
                            setmessage(null);
                        }, 5000)
                    )
                    .catch(
                        setStyleName("delete"),
                        setmessage(
                            `Information of ${newName} has already been removed from server`
                        ),
                        setTimeout(() => {
                            setmessage(null);
                        }, 4000)
                    );
            }
        } else {
            personservices.create(personNew).then((data) => {
                setPersons(persons.concat(data));
                setmessage(`Create ${newName}`);
                setStyleName("createUpdate");
                setTimeout(() => {
                    setmessage(null);
                }, 4000);
            });
        }
        setNewName("");
        setNumber("");
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

    const handleDelete = (e) => {
        const id = e.target.attributes.data_id.value;
        const person = persons.filter((person) => person.id == id)[0];

        if (window.confirm(`Delete ${person.name} ?`)) {
            personservices.delet(id).then(
                setPersons(
                    persons.filter((item) => item.id != id),
                    setStyleName("delete"),
                    setmessage(
                        `has removed from server`
                    ),
                    setTimeout(() => {
                        setmessage(null);
                    }, 4000)
                )
            );
        }
    };

    const rows = (persons) =>
        persons.filter(
            ({ name }) =>
                name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        );

    useEffect(() => {
        personservices.getAll().then((res) => setPersons(res));
    }, []);

    return (
        <div>
            <Title title="Phonebook" />
            <Message stylename={styleName} message={message} />
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
            <Persons persons={rows(persons)} handledelete={handleDelete} />
        </div>
    );
};
