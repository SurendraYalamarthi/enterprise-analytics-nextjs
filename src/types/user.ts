
export type User = {
    id: number;
    name: string;
    role: string;
}

export type UserRole = "Admin" | "Manager" | "Viewer";