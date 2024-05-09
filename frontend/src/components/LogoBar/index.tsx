import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";

export default function LogoBar() {
  return (
    <div className={styles.logoBar + " left-8"}>
      <img src={logo} alt="logo" />
    </div>
  );
}
