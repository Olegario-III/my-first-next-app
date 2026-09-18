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
                onClick={()=>
                    setProfiles(
                        profiles.filter((profile) =>profile.name !== "Juan")
                    )
                }
            >Remove Juan
            </button>
            <button
                onClick={()=>
                    setProfiles((prev) =>
                        prev.map ((profile) =>
                            profile.name === "Juan"
                        ? { ...profile, age:26 }
                        : profile
                    )
                    )
                }
            >Update Juan
            </button>
        </div>
    );
}