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

export default function Profile(){
    return(
        <div>
            <button
                onClick={()=>
                    setProfile({
                        ...profile,
                        name: "Olegario"
                    })
                }
            >Set Name</button>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <p>Course: {profile.course}</p>
        </div>
    );
}