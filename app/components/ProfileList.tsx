"use client";

import { useState } from "react";

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
    return (
        <div>
            {profiles.map((profile)=> (
                <div key={profile.name}>
                <p>{profile.name}</p>
                <p>{profile.age}</p>
                <p>{profile.course}</p>
                </div>
            ))}
        </div>
    );
}