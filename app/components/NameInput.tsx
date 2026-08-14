"use client"

import { useState } from "react";

export default function NameInput() {
    const [name, setName] = useState("");

    return(
        <div>
            <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)} 
            />

            <p>hello, {name}!</p>
        </div>
    );
}