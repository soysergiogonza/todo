import { Cover, Heading, IconPage } from "~/components";

import styles from "./Hero.module.css";
import { Badge } from "../Badge";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <article className={styles.cover}>
        <Cover source="/cover.svg" width={100} height={100} />
        <IconPage
          source="/logo.svg"
          width={50}
          height={50}
          className={styles.icon}
        />
      </article>
      <Heading className={styles.title}>Todo App</Heading>
      <Badge type="info" />
    </section>
  );
};
