"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./dashboard.module.css";
import { navigationItems } from "@/constants/navigation";
import { isRouteMatch } from "@/utils/routing";

const Sidebar = () => {

  const pathname = usePathname();

  return (
    <div className={styles.sidebar}>
      <ul>
        {
          navigationItems.map((val) => {
            const routeMatched = isRouteMatch(pathname, val.path, val.exact)
            return (
              <li
                key={val.path}
                className={
                  routeMatched ? styles.active : ""
                }
              >
                <Link
                  href={val.path}
                  aria-current={
                    routeMatched ? "page" : undefined
                  }
                >
                  {val.label}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar;