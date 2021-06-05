import React from "react";
import classes from "./post-footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function PostFooter() {
  return (
    <div>
      <div className={classes.socials}>
        <h5>Share This:</h5>
        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener">
          <FacebookIcon />
        </a>
        <a href="https://facebook.com">
          {" "}
          <TwitterIcon />
        </a>
        <a href="https://facebook.com">
          {" "}
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
