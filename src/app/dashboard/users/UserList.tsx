"use client"

import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@mui/material"
import type { User } from "@/types/user";
import Link from "next/link";
import { useState } from "react";
import Filters from "./Filters";

type UserListPropType = {
    users: User[]
}

const UserList = ({ users }: UserListPropType) => {

    const [filteredUsers, setFilteredUsers] = useState(users);
    const [sortBy, setSortBy] = useState<"name" | "role">("name");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const handleSort = (key: "name" | "role") => {
        if (sortBy === key) {
            setSortDirection(prevVal => prevVal === "asc" ? "desc" : "asc");
        } else {
            setSortBy(key);
            setSortDirection("asc");
        }
    }

    const sortedData = [...filteredUsers].sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];

        if (valA < valB) {
            return sortDirection === "asc" ? -1 : 1;
        }

        if (valA > valB) {
            return sortDirection === "asc" ? 1 : -1;
        }

        return 0;
    })

    return (
        <Stack sx={{ gap: 2 }}>
            <Filters users={users} onFilterChange={setFilteredUsers} />
            <TableContainer component={Paper} sx={{ border: 1, borderColor: "divider", borderRadius: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "action.hover" }}>
                            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                <TableSortLabel
                                    active={sortBy === "name"}
                                    direction={sortBy === "name" ? sortDirection : "asc"}
                                    onClick={handleSort.bind(null, 'name')}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                <TableSortLabel
                                    active={sortBy === "role"}
                                    direction={sortBy === "role" ? sortDirection : "asc"}
                                    onClick={handleSort.bind(null, 'role')}
                                >
                                    Role
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            sortedData.length > 0 ? (
                                sortedData.map(user => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.role}</TableCell>
                                        <TableCell>
                                            <Link href={`/dashboard/users/${user.id}`}>View</Link>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        {`No users found. ${users.length > 0 ? "Try adjusting your filters." : ""}`}
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}

export default UserList