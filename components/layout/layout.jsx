import styles from "../../styles/layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
