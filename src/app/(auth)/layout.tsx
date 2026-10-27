import { LayoutProps } from "@/types/layout";
import styles from "./auth.module.css";
import Header from "@/components/Header";

const layout = ({children} : LayoutProps) => {
  return (
    <div className={styles.authLayout}>
        <Header />
        <div className={styles.authContent}>
            {children}
        </div>
    </div>
  )
}

export default layout