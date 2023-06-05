import { useRouter } from "next/router";

import { Button } from "@mui/material";

import styles from "../styles/Home.module.css";

export default function Home({ name, summary }) {
  const router = useRouter();

  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary}</div>
      <div>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/projects")}
        >
          Go to Store
        </Button>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  console.log("Running in the server");
  // Get your date from an API
  return {
    props: {
      name: "ITJ Funko Store",
      summary:
        "Welcome to this simple and improvised shop for ITJ fullstack bootcamp project.",
    },
  };
}
