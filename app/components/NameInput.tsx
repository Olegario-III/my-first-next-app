"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

export default function NameInput() {
    const [name, setName] = useState("");
    const [sname, setSname] = useState("");

    const handleSubmit = (
        event: FormEvent<HTMLFormElement>
    ): void => {
        event.preventDefault();
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setName(event.target.value);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={handleChange} 
            />

            <button type="submit">
                Submit
            </button>

            <p>hello, {sname}!</p>
            <p>Submitted name : {sname}!</p>
        </form>
    );
}