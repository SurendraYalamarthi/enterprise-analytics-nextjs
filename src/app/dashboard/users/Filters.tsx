import { ChangeEvent, useState } from "react";
import type { User, UserRole } from "@/types/user";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { userRoles } from "@/lib/users";

type FiltersPropType = {
    users: User[];
    onFilterChange: (users: User[]) => void
}

const Filters = ({ users, onFilterChange }: FiltersPropType) => {

    const [search, setSearch] = useState<string>('');
    const [role, setRole] = useState<UserRole | 'All Roles'>('All Roles');

    const filterUsers = (
        searchText: string,
        selectedRole: UserRole | "All Roles"
    ) => {
        const filteredUsers = [...users].filter(val => {
            return (
                val.name.toLowerCase().includes(searchText.toLowerCase())
                && (selectedRole === "All Roles" || val.role === selectedRole)
            )
        })
        
        onFilterChange(filteredUsers);
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value;
        setSearch(searchText);
        filterUsers(searchText, role);
    }

    const handleRoleChange = (e: SelectChangeEvent) => {
        const selectedRole = e.target.value as (UserRole | 'All Roles');
        setRole(selectedRole);
        filterUsers(search, selectedRole);
    }

    const handleClearFilters = () => {
        setSearch("");
        setRole("All Roles");
        
        onFilterChange(users);
    }

    const isAnyFilterSelected = !!search || role !== "All Roles";

    return (
        <Grid container spacing={2}>
            <Grid size={6}>
                <TextField
                    fullWidth
                    autoComplete="off"
                    id="Users-Filters-Search"
                    label="Search By Name"
                    variant="outlined"
                    placeholder="Search By Name"
                    value={search}
                    onChange={handleSearchChange}
                />
            </Grid>
            <Grid size={6}>
                <FormControl fullWidth>
                    <InputLabel id="users-filters-rolelabel">Role</InputLabel>
                    <Select
                        labelId="users-filters-rolelabel"
                        id="users-filters-role"
                        value={role}
                        onChange={handleRoleChange}
                    >
                        <MenuItem value="All Roles">All Roles</MenuItem>
                        {
                            userRoles.map(role => (
                                <MenuItem
                                    key={role.value}
                                    value={role.value}
                                >
                                    {role.name}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid size="auto">
                <Button 
                    variant="text"
                    disabled={!isAnyFilterSelected}
                    onClick={handleClearFilters}
                >
                    Clear Filters
                </Button>
            </Grid>
        </Grid>
    )
}

export default Filters;