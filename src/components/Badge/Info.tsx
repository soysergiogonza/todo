import { ReactNode } from "react";

import { BsInfoCircleFill } from "react-icons/bs";

import styles from "./Badge.module.css";

interface Props {
  children: ReactNode;
  badgeName?: string;
}
export const Info = ({ children, badgeName = "info" }: Props) => {
  return (
    <article className={styles.info}>
      <div className={styles.badgeName}>
        <BsInfoCircleFill
          size="3rem"
          style={{
            width: "auto",
          }}
        />
        <span className={styles.span}>{badgeName}</span>
      </div>
      <p className={styles.description}>{children}</p>
    </article>
  );
};
