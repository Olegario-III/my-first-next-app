"use client"

import { useState } from "react";

type Profile = {
    name: string;
    age: number;
    course: string;
}

const [profile, setProfile] = useState<Profile>({
    name: "",
    age: 0,
    course: "",
});

const [selectedProfile, setSelectedProfile] =
    useState<Profile | null>(null);

export default function Profile(){
    return(
        <div>
            <button
                onClick={()=>
                    setProfile({
                        ...profile,
                        name: "Olegario",
                    })
                }
            >Set Name</button>
            <button
                onClick={()=>
                    setProfile({
                        ...profile,
                        age: 29,
                    })
                }
            >Set Age</button>
            <button
                onClick={()=>
                    setProfile({
                        ...profile,
                        course: "BSIT",
                    })
                }
            >Set Course</button>

            <button onClick={()=>setSelectedProfile(profile)}>
                Select Profile
            </button>


            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <p>Course: {profile.course}</p>
            {selectedProfile && (
                <p>Selected: {selectedProfile.name}</p>
            )}
        </div>
    );
}