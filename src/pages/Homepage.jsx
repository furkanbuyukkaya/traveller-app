import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You love travelling?
          <br />
          We can help you remember what you love the most.
        </h1>
        <h2>
          Traveller is not just another tracking app. It is your personal time
          machine, designed to help you relive your adventures and cherish your
          memories.
        </h2>
        <Link to={"/login"} className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
