"use client";

import { useState } from "react";
import type { SubmitEvent, ChangeEvent } from "react";

type Profile = {
    name: string;
    age: number;
    course: string;
};

export default function ProfileList() {
    const [profiles, setProfiles] = useState<Profile[]>([
        {
            name: "Olegario",
            age: 29,
            course: "BSIT",
        },
        {
            name: "Juan",
            age: 25,
            course: "BSIT",
        },
    ]);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault();

        setError("");

        const numericAge = Number(age);

        if (!Number.isFinite(numericAge) || numericAge <= 0) {
            setError("Age must be a valid number greater than zero.");
            return;
        }

        const duplicate = profiles.some(
            (profile) =>
                profile.name.toLowerCase() === name.trim().toLowerCase()
        );

        if (duplicate) {
            setError("This name already exists.");
            return;
        }

        const newProfile: Profile = {
            name: name.trim(),
            age: Number(age),
            course: course,
        };
        setProfiles((prev) => [
            ...prev,
            newProfile
        ]);
        setName("");
        setAge("");
        setCourse("");
    }


    return (
        <div>
            {profiles.map((profile) => (
                <div key={profile.name}>
                    <p>{profile.name}</p>
                    <p>{profile.age}</p>
                    <p>{profile.course}</p>
                </div>
            ))}

            <button
                onClick={() =>
                    setProfiles([
                        ...profiles,
                        {
                            name: "Maria",
                            age: 22,
                            course: "BSIT"
                        },
                    ])
                }
            >Add Profile</button>
            <button
                onClick={() =>
                    setProfiles(
                        profiles.filter((profile) => profile.name !== "Juan")
                    )
                }
            >Remove Juan
            </button>
            <button
                onClick={() =>
                    setProfiles((prev) =>
                        prev.map((profile) =>
                            profile.name === "Juan"
                                ? { ...profile, age: 26 }
                                : profile
                        )
                    )
                }
            >Update Juan
            </button>

            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    min="1"
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Course"
                    value={course}
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCourse(e.target.value)}
                />
                <button type="submit">Add Profile</button>
            </form>
        </div>
    );
}