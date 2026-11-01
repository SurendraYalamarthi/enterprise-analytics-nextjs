
export interface NavigationItem {
  readonly label: string;
  readonly path: string;
  readonly exact: boolean;
}

export const navigationItems: readonly NavigationItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    exact: true
  },
  {
    label: "Reports",
    path: "/dashboard/reports",
    exact: false
  },
  {
    label: "Users",
    path: "/dashboard/users",
    exact: false
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    exact: false
  },
];