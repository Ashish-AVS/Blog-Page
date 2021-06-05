import React from "react";
import Image from "next/image";
import classes from "./post-header.module.css";
import Typography from "@material-ui/core/Typography";

export default function PostHeader(props) {
  const { title, image } = props;
  return (
    <Typography variant="h1" component="h1" gutterBottom>
      <header className={classes.header}>
        <h1>{title}</h1>
        <Image
        //   src={image}
          src="/images/posts/test.jpg"
          alt={title}
          width={400}
          height={200}
          layout="responsive"
        />
      </header>
    </Typography>
  );
}
{
  /* <header className={classes.header}>
<h1>{title}</h1>
<Image
  src={image}
  // src="/images/posts/test.jpg"
  alt={title}
  width={200}
  height={150}
  layout="responsive"
/>
</header> */
}
