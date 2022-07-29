import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data } = trpc.useQuery([
    "todos.all",
    { text: "Davy", name: "Rocks" },
  ]);
  return <div className={styles.container}>{data?.greeting}</div>;
};

export default Home;
