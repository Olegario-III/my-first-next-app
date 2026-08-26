"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={(): void => setCount(count + 1)}>
                [+1]
            </button>
            <button onClick={(): void => setCount(count - 1)}>
                [-1]
            </button>
            <button onClick={(): void => setCount(0)}>
                [reset]
            </button>
        </div>
    );
}