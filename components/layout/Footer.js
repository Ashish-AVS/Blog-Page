import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
        <div>
        Made with ❤ in NextJs
        </div>
        <a href="https://github.com/Ashish-AVS/NextJs-Blog">GitHub</a>
    </footer>
  );
}
