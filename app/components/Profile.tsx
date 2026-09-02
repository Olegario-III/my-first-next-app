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