"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";

export default function NameInput() {
    const [name, setName] = useState("");
    const [sname, setSname] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (
        event: React.SubmitEvent    <HTMLFormElement>
    ): void => {
        event.preventDefault();

        console.log(name);
        setSname(name);
    };

    const handleNameChange = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        setName(event.target.value);
    };


    const handleAgeChange = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        setAge(event.target.value);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={handleNameChange} 
            />

            <input
            type="number"
            value={age}
            placeholder="Enter your Age"
            onChange={handleAgeChange} 
            />

            <button type="submit">
                Submit
            </button>

            <p>hello, {sname}!</p>
            <p>Submitted name : {sname}!</p>
            <p>Age: {age}</p>
        </form>
    );
}