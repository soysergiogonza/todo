import { Info } from "./Info";
import styles from "./Badge.module.css";

interface Props {
  type: "info" | "warning" | "error";
}

export const Badge = ({ type = "info" }: Props) => {
  return (
    <section className={styles.badge}>
      {type === "info" && (
        <Info>
          The idea of this application is to learn about how can i work with an
          specific Architecture, building Designs and Diagrams about this{" "}
          <span className={styles.specialSpan}>Todo App</span>
        </Info>
      )}
    </section>
  );
};
