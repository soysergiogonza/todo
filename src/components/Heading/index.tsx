import styles from "./Heading.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: Props) => {
  return <h1 className={`${styles.h1} ${className}`}>{children}</h1>;
};

