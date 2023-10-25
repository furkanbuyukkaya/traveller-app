import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to={"/"} className={styles.logo}>
      <p>
        <span style={{ color: "orange" }}>Travel</span>
        ler App
      </p>
    </Link>
  );
}

export default Logo;
