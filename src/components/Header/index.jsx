import Link from "next/link";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes.anchor} href="/">
        Index
      </Link>
      <Link className={classes.anchor} href="/about">
        About
      </Link>
    </header>
  );
}
