import Sidebar from "@/components/dashboard/Sidebar";
import styles from "./dashboard.module.css";
import { LayoutProps } from "@/types/layout";
import Header from "@/components/Header";

const DashboardLayout = ({ children }: LayoutProps ) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.main}>
                <Sidebar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;