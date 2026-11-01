import { User } from "@/types/user";

const users: User[] = [
    {
        id: 1,
        name: "Surendra",
        role: "admin"
    },
    {
        id: 2,
        name: "Surendra Yalamarthi",
        role: "manager"
    },
    {
        id: 3,
        name: "Surendra Y",
        role: "viewer"
    }
];

export const userRoles = [
    {value: "admin", name:"Admin"},
    {value: "manager", name:"Manager"},
    {value: "viewer", name:"Viewer"}
]

export const getUsers = async () => {
    return new Promise<User[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(users);
            // reject(new Error("Internal Server error"));
        }, 2000);
    });
}

export const getUserById = async (id: string) => {
    return new Promise<User | null>((resolve, reject) => {
        setTimeout(() => {

            if(!id || isNaN(+id)) {
                reject(new Error("Invalid user"));
                return;
            }

            const user = users.filter(val => val.id+"" === id);

            if(user.length) {
                resolve(user[0]);
            } else {
                resolve(null);
            }
        }, 500);
    });
}