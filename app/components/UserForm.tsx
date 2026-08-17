"use client"

import { useState } from "react";

type User = {
    name: string;
    email: string;
    course: string;
}

export default function UserForm() {
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        course: "",
    });

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Course: {user.course}</p>

            <input
            type="text"
            placeholder="Enter your name"
            value={user.name}
            onChange={(event) =>
                setUser({
                    ...user,
                    name: event.target.value,
                })
            }
            />
            <input
            type="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(event) =>
                setUser({
                    ...user,
                    email: event.target.value,
                })
            }
            />
            <input
            type="text"
            placeholder="Enter your course"
            value={user.course}
            onChange={(event) =>
                setUser({
                    ...user,
                    course: event.target.value,
                })
            }
            />
        </div>
    );
}