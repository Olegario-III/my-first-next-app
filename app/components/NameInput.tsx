"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function NameInput() {
    const [name, setName] = useState("");
    const [sname, setSname] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        console.log(name);
        setSname(name);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)} 
            />

            <button type="submit">
                Submit
            </button>

            <p>hello, {sname}!</p>
            <p>Submitted name : {sname}!</p>
        </form>
    );
}