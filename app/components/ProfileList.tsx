"use client";

import { useState } from "react";
import type { SubmitEvent, ChangeEvent } from "react";

type Profile = {
    id: number;
    name: string;
    age: number;
    course: string;
};

export default function ProfileList() {
    const [profiles, setProfiles] = useState<Profile[]>([
        {
            id: 1,
            name: "Olegario",
            age: 29,
            course: "BSIT",
        },
        {
            id: 2,
            name: "Juan",
            age: 25,
            course: "BSIT",
        },
    ]);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [error, setError] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault();

        setError("");

        const numericAge = Number(age);

        // Age validation
        if (!Number.isFinite(numericAge) || numericAge <= 0) {
            setError("Age must be a valid number greater than zero.");
            return;
        }

        // Duplicate name check (ignore the profile currently being edited)
        const duplicate = profiles.some(
            (profile) =>
                profile.name.toLowerCase() === name.trim().toLowerCase() &&
                profile.id !== editingId
        );

        if (duplicate) {
            setError("This name already exists.");
            return;
        }

        // ========== ADD vs EDIT LOGIC ==========
        if (editingId !== null) {
            // Update existing profile
            setProfiles((prev) =>
                prev.map((profile) =>
                    profile.id === editingId
                        ? {
                            ...profile,
                            name: name.trim(),
                            age: numericAge,
                            course: course.trim(),
                        }
                        : profile
                )
            );
            setEditingId(null); // exit edit mode
        } else {
            // Add new profile
            const newProfile: Profile = {
                id: Date.now(),
                name: name.trim(),
                age: numericAge,
                course: course.trim(),
            };
            setProfiles((prev) => [...prev, newProfile]);
        }

        // Clear the form
        setName("");
        setAge("");
        setCourse("");
    };


    return (
        <div>
            {profiles.map((profile) => (
                <div key={profile.id}>
                    <p>{profile.name}</p>
                    <p>{profile.age}</p>
                    <p>{profile.course}</p>
                    <button
                        onClick={() => {
                            setEditingId(profile.id);
                            setName(profile.name);
                            setAge(String(profile.age));
                            setCourse(profile.course);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() =>
                            setProfiles((prev) =>
                                prev.filter((item) => item.id !== profile.id)
                            )
                        }
                    >Delete
                    </button>
                </div>
            ))}

            <button
                onClick={() =>
                    setProfiles([
                        ...profiles,
                        {
                            id: Date.now(),
                            name: "Maria",
                            age: 22,
                            course: "BSIT"
                        },
                    ])
                }
            >Add Profile</button>

            <button
                onClick={() =>
                    setProfiles((prev) =>
                        prev.map((profile) =>
                            profile.id === 2
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