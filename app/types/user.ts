export interface User {
    name: string;
    email: string;
    course: string;
}

export interface Student extends User {
    studentId: number;
}