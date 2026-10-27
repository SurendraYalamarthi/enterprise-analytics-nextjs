export const isRouteMatch = (
    pathname: string,
    href: string,
    exact: boolean
) => {
    if (exact) {
        return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}